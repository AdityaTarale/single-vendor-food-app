import { type ComponentProps } from "react";
import {
  type CompositeScreenProps,
  type NavigationContainer,
  type NavigatorScreenParams,
} from "@react-navigation/native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

export interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer>> {}

export type RootNavigatorParamList = {
  Home: undefined;
  Search: undefined;
  MenuItemList: undefined;
};

export type RootStackNavigatorScreenProps<
  T extends keyof RootNavigatorParamList
> = NativeStackScreenProps<RootNavigatorParamList, T>;

declare global {
  namespace ReactNavigation {
    export interface RootParamList extends RootNavigatorParamList {}
  }
}
