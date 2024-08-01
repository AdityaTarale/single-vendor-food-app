import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {getIcon} from '../../../assets/constants';
import {Button, Text} from '../../elements';
import colors, {lightenColor} from '../../theme/colors';

const menuDetail = {
  name: 'Jalebi',
  ingredients:
    'Maida, corn flour, baking soda, vinegar, curd, water, turmeric, saffron, cardamom',
  diet: 'vegetarian',
  prep_time: 10,
  cook_time: 50,
  flavor_profile: 'sweet',
  course: 'dessert',
  state: 'Uttar Pradesh',
  region: 'North',
  img_url:
    'https://crazymasalafood.com/wp-content/images/2023/05/jalebi-1.jpg.webp',
};

const MenuDetailScreen = () => {
  const HeartSvg = getIcon('heart');

  return (
    <View>
      <Image
        source={{uri: menuDetail.img_url}}
        style={{width: '100%', height: 220}}
      />
      <View style={{padding: 12, gap: 12}}>
        <View style={{flexDirection: 'row', gap: 12}}>
          <Text variant="bodySmall">{menuDetail.diet}</Text>
          <Text variant="bodySmall">{menuDetail.flavor_profile}</Text>
        </View>
        <View>
          <Text variant="titleLarge">{menuDetail.name}</Text>
          <Text variant="bodyMedium">{menuDetail.ingredients}</Text>
        </View>
        <View style={styles.wishList}>
          <HeartSvg color={lightenColor('black', 40)} />
        </View>
        <Button title="Add item 233" onPress={() => {}} />
      </View>
    </View>
  );
};

export default MenuDetailScreen;

const styles = StyleSheet.create({
  wishList: {
    position: 'absolute',
    right: 8,
    top: 8,
    padding: 4,
  },
});
