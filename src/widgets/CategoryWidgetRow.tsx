import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Category from '../components/Category';
import spacing from '../theme/spacing';
import {CategoryType} from '../types/category';

type CategoryWidgetRowProps = {
  categories: CategoryType[];
};

export const CategoryWidgetRow: FC<CategoryWidgetRowProps> = ({categories}) => {
  const navigate = useNavigation();

  const navigateToSubCategoryPage = () => {
    navigate.navigate('MenuItemList');
  };

  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
      {categories?.map(category => {
        return (
          <View key={category.id} style={{marginHorizontal: spacing['12']}}>
            <Category {...category} onPress={navigateToSubCategoryPage} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CategoryWidgetRow;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: spacing[4],
  },
  separator: {
    height: spacing[20],
  },
});
