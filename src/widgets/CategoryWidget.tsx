import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Category from "../components/Category";
import spacing from "../theme/spacing";
import { CategoryType } from "../types/categories";

type CategoryWidgetProps = {
  categories: CategoryType[];
};

const CategoryWidget: FC<CategoryWidgetProps> = ({ categories }) => {
  const navigate = useNavigation();

  const navigateToSubCategoryPage = () => {
    navigate.navigate("SubCategory");
  };

  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
      {categories?.map((category) => {
        return (
          <View key={category.id} style={{ marginHorizontal: spacing[4] }}>
            <Category {...category} onPress={navigateToSubCategoryPage} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CategoryWidget;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: spacing[1],
  },
  separator: {
    height: spacing[6],
  },
});
