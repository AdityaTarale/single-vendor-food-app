import React, { FC, useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import {
  NavigationState,
  SceneRendererProps,
  TabBar,
  TabView,
} from "react-native-tab-view";
import CategoryItem from "../components/Category";
import spacing from "../theme/spacing";
import { CategoryType } from "../types/categories";

type SubCategoryListProps = {
  subCategories: CategoryType[];
};

type Route = {
  key: string;
  title: string;
  image: string;
};

const SubCategoryList: FC<SubCategoryListProps> = ({ subCategories }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const routes: Route[] = subCategories.map((subCategory) => ({
    key: subCategory.id.toString(),
    title: subCategory.category,
    image: subCategory.image,
  }));

  const renderScene = () => null;

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: NavigationState<Route> }
  ) => (
    <TabBar
      {...props}
      tabStyle={{ width: 90 }}
      inactiveColor="black"
      activeColor="black"
      pressColor="transparent"
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      renderLabel={({
        route,
      }: {
        route: Route;
        focused: boolean;
        color: string;
      }) => (
        <View style={{ marginHorizontal: spacing[1] }}>
          <CategoryItem
            onPress={() => {}}
            id={route.key}
            image={route.image}
            category={route.title}
          />
        </View>
      )}
      scrollEnabled
    />
  );

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default SubCategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContent: {
    paddingHorizontal: spacing[1],
  },
  separator: {
    height: spacing[6],
  },
  tabBar: {
    backgroundColor: "white",
    width: "auto",
  },
  indicator: {
    backgroundColor: "black",
  },
});
