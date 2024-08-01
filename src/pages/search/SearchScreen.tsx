import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {RootStackNavigatorScreenProps} from '../../types/navigation';
import {CategoryWidgetRow} from '../../widgets/CategoryWidgetRow';
import {useCategoryStore} from '../../hooks/store/useCategoryStore';

interface SearchScreenProps extends RootStackNavigatorScreenProps<'Search'> {}

export const SearchScreen: FC<SearchScreenProps> = () => {
  const {category} = useCategoryStore();

  return (
    <ScrollView style={styles.screen}>
      <CategoryWidgetRow categories={category} />
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: colors.white},
});
