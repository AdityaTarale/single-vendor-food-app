import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import spacing from "../theme/spacing";
import { Text } from "../elements";
import { CategoryType } from "../types/categories";

type CategoryItemProps = CategoryType & {
  onPress: () => void;
};

const CategoryItem: FC<CategoryItemProps> = ({ category, image, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.category}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <Text variant="labelLarge">{category}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  category: {
    gap: spacing[2],
    alignItems: "center",
  },
  imageContainer: {
    width: 64,
    height: 64,
    backgroundColor: "#afafaf30",
    borderRadius: 32,
  },
  image: { width: "100%", height: "100%", objectFit: "contain" },
});
