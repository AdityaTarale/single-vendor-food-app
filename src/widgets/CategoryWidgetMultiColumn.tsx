import React, { FC } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Category from "../components/Category";
import spacing from "../theme/spacing";
import { CategoryType } from "../types/category";
import { useNavigation } from "@react-navigation/native";

type CategoryWidgetMultiColumnProps = {
  categories: CategoryType[];
};

export const CategoryWidgetMultiColumn: FC<CategoryWidgetMultiColumnProps> = ({
  categories,
}) => {
  const navigate = useNavigation();

  const navigateToSubCategoryPage = () => {
    navigate.navigate("MenuItemList");
  };
  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
      <FlatList
        numColumns={6}
        data={categories}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: spacing[12] }}>
            <Category {...item} onPress={navigateToSubCategoryPage} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </ScrollView>
  );
};

export default CategoryWidgetMultiColumn;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: spacing[4],
  },
  separator: {
    height: spacing[20],
  },
});
