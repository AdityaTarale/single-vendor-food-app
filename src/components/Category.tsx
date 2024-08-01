import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import spacing from '../theme/spacing';
import {Text} from '../elements';
import {CategoryType} from '../types/category';

type CategoryProps = CategoryType & {
  onPress: () => void;
};

const Category: FC<CategoryProps> = ({name, image, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.category}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://www.themealdb.com/images/category/pasta.png',
            }}
            style={styles.image}
          />
        </View>
        <Text
          variant="labelMedium"
          style={styles.title}
          numberOfLines={2}
          ellipsizeMode="clip">
          {name}
        </Text>
      </View>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    width: 72,
    alignItems: 'center',
    position: 'relative',
    gap: spacing[8],
  },
  imageContainer: {
    width: spacing[64],
    height: spacing[64],
    backgroundColor: '#afafaf30',
    borderRadius: spacing[32],
  },
  image: {width: '100%', height: '100%', objectFit: 'contain'},
  title: {
    textAlign: 'center',
  },
});
