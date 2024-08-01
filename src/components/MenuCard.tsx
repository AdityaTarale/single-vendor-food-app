import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import spacing from '../theme/spacing';
import {Text} from '../elements';
import {MenuType} from '../types/menu';
import {getIcon} from '../../assets/constants';
import colors, {lightenColor} from '../theme/colors';

type MenuCardProps = MenuType & {
  onPress: () => void;
};

const MenuCard: FC<MenuCardProps> = ({name, img_url, ingredients, onPress}) => {
  const HeartSvg = getIcon('heart');
  const StarSvg = getIcon('star');

  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.wishList}>
          <HeartSvg color={lightenColor('black', 40)} width={18} height={18} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={{uri: img_url}} style={styles.image} />
        </View>
        <View>
          <Text variant="titleSmall">{name}</Text>
          <Text variant="bodySmall" numberOfLines={1} ellipsizeMode="tail">
            {ingredients}
          </Text>
          <View style={styles.cardFooter}>
            <Text variant="bodySmall">$4.99</Text>
            <Text variant="bodySmall">|</Text>
            <StarSvg color={colors.yellow} width={12} height={12} />
            <Text variant="bodySmall">4.9</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    width: spacing[130],
    marginHorizontal: spacing[8],
    gap: spacing[8],
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[8],
    marginTop: spacing[4],
  },
  imageContainer: {
    backgroundColor: '#afafaf30',
    width: spacing[130],
    height: spacing[140],
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacing[16],
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  wishList: {
    position: 'absolute',
    right: spacing[8],
    top: spacing[8],
    zIndex: 1,
    backgroundColor: 'white',
    padding: spacing[4],
    borderRadius: spacing[24],
  },
});
