import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {apiConfig} from '../../core/config';
import {useQuery} from '../../core/queryHook';
import indianFood from '../../db/indian-food';
import {useCategoryStore} from '../../hooks/store/useCategoryStore';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import {RootStackNavigatorScreenProps} from '../../types/navigation';
import {CategoryWidgetMultiColumn} from '../../widgets/CategoryWidgetMultiColumn';
import MenuItemListHorizontal from '../../widgets/MenuItemListHorizontal';
import MenuItemListVertical from '../../widgets/MenuItemListVertical';
import SearchWidget from '../../widgets/SearchWidget';
import {StrapiCategoryResponse} from '../../types/category';

interface HomeScreenProps extends RootStackNavigatorScreenProps<'Home'> {}

export const HomeScreen: FC<HomeScreenProps> = () => {
  const navigate = useNavigation();

  const {data} = useQuery<StrapiCategoryResponse>(apiConfig.categories);
  const {category, setCategory} = useCategoryStore();

  useEffect(() => {
    if (data?.data.length && !category.length) {
      setCategory(data.data);
    }
  }, [category.length, data, setCategory]);

  const navigateToSearchPage = () => {
    navigate.navigate('Search');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.screen}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}>
      <Header />
      <SearchWidget onPress={navigateToSearchPage} />
      <CategoryWidgetMultiColumn categories={category} />
      {/* <Text>Carousel</Text> */}

      <MenuItemListHorizontal menuItems={indianFood.slice(0, 20)} />

      <MenuItemListVertical menuItems={indianFood.slice(101, 110)} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    gap: spacing[24],
  },
});
