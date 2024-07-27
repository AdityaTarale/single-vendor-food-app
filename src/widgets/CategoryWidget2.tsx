import React, { FC } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Category from "../components/Category";
import spacing from "../theme/spacing";
import { CategoryType } from "../types/categories";
import { useNavigation } from "@react-navigation/native";

type CategoryWidget2Props = {
  categories: CategoryType[];
};

const CategoryWidget2: FC<CategoryWidget2Props> = ({ categories }) => {
  const navigate = useNavigation();

  const navigateToSubCategoryPage = () => {
    navigate.navigate("SubCategory");
  };
  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
      <FlatList
        numColumns={6}
        data={categories}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: spacing[4] }}>
            <Category {...item} onPress={navigateToSubCategoryPage} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </ScrollView>
  );
};

export default CategoryWidget2;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: spacing[1],
  },
  separator: {
    height: spacing[6],
  },
});
