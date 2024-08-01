import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import Category from '../components/Category';
import spacing from '../theme/spacing';
import {StrapiCategory} from '../types/category';

type CategoryWidgetMultiColumnProps = {
  categories: StrapiCategory[];
};

export const CategoryWidgetMultiColumn: FC<CategoryWidgetMultiColumnProps> = ({
  categories,
}) => {
  const navigate = useNavigation();

  const navigateToSubCategoryPage = (categoryId: number) => {
    navigate.navigate('MenuItemList', {categoryId: categoryId});
  };

  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
      <FlatList
        numColumns={8}
        data={categories}
        renderItem={({item}) => (
          <View style={{marginHorizontal: spacing[12]}}>
            <Category
              {...item.attributes}
              onPress={() => navigateToSubCategoryPage(item.id)}
            />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={separator}
      />
    </ScrollView>
  );
};

export default CategoryWidgetMultiColumn;

const separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: spacing[4],
  },
  separator: {
    height: spacing[20],
  },
});
