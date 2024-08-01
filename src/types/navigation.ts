import {type NavigationContainer} from '@react-navigation/native';
import {type NativeStackScreenProps} from '@react-navigation/native-stack';
import {type ComponentProps} from 'react';

export interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer>> {}

export type RootNavigatorParamList = {
  Home: undefined;
  Search: undefined;
  MenuItemList: {categoryId: number};
};

export type RootStackNavigatorScreenProps<
  T extends keyof RootNavigatorParamList,
> = NativeStackScreenProps<RootNavigatorParamList, T>;

declare global {
  namespace ReactNavigation {
    export interface RootParamList extends RootNavigatorParamList {}
  }
}
