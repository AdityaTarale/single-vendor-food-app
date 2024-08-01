import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {apiConfig} from '../../core/config';
import {useQuery} from '../../core/queryHook';
import indianFood from '../../db/indian-food';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import {RootStackNavigatorScreenProps} from '../../types/navigation';
import CategoryTab from '../../widgets/CategoryTab';
import MenuItemListVertical from '../../widgets/MenuItemListVertical';
import {StrapiSubCategoryResponse} from '../../types/category';

interface MenuItemListScreenProps
  extends RootStackNavigatorScreenProps<'MenuItemList'> {}

export const MenuItemListScreen: FC<MenuItemListScreenProps> = ({route}) => {
  const categoryId = route.params.categoryId;

  const {data: subCategory} = useQuery<StrapiSubCategoryResponse>({
    ...apiConfig.subcategories,
    url: `${apiConfig.subcategories.url}${categoryId}?populate=*`,
  });

  return (
    <ScrollView
      contentContainerStyle={styles.screen}
      showsVerticalScrollIndicator={false}>
      <CategoryTab
        categories={
          subCategory?.data.attributes.sub_categories.data.length
            ? subCategory?.data.attributes.sub_categories.data
            : []
        }
      />
      <MenuItemListVertical menuItems={indianFood.slice(101, 110)} />
    </ScrollView>
  );
};

export default MenuItemListScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    gap: spacing[4],
  },
});
