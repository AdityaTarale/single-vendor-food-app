import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import spacing from "../theme/spacing";
import { Text } from "../elements";
import { CategoryType } from "../types/category";

type CategoryProps = CategoryType & {
  onPress: () => void;
};

const Category: FC<CategoryProps> = ({ category, image, onPress }) => {
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

export default Category;

const styles = StyleSheet.create({
  category: {
    gap: spacing[8],
    alignItems: "center",
  },
  imageContainer: {
    width: spacing[64],
    height: spacing[64],
    backgroundColor: "#afafaf30",
    borderRadius: spacing[32],
  },
  image: { width: "100%", height: "100%", objectFit: "contain" },
});
