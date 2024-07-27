import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "./pages/home";
import { MenuItemListScreen } from "./pages/menuItemList";
import { SearchScreen } from "./pages/search";
import { NavigationProps, RootNavigatorParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const Navigator = (props: NavigationProps): React.ReactElement => {
  return (
    <NavigationContainer {...props}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Search"
          options={{ title: "" }}
          component={SearchScreen}
        />
        <Stack.Screen name="MenuItemList" component={MenuItemListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
