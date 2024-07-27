import React, { FC, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import MealCard from "../components/MenuCard";
import { BottomSheet, Text } from "../elements";
import MealDetailScreen from "../pages/menuDetail/MenuDetailScreen";
import spacing from "../theme/spacing";
import { MenuType } from "../types/menu";

type MenuItemListHorizontalProps = {
  menuItems: MenuType[];
};

const MenuItemListHorizontal: FC<MenuItemListHorizontalProps> = ({
  menuItems,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const openBottomSheet = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.listWidget}>
      <View style={styles.container}>
        <Text variant="titleMedium">Top Rated Meal</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
        {menuItems?.map((menuItem) => {
          return (
            <MealCard
              key={menuItem.name}
              {...menuItem}
              onPress={openBottomSheet}
            />
          );
        })}
      </ScrollView>

      <BottomSheet isVisible={isVisible} onClose={openBottomSheet}>
        <MealDetailScreen />
      </BottomSheet>
    </View>
  );
};

export default MenuItemListHorizontal;

const styles = StyleSheet.create({
  listWidget: {
    gap: spacing[10],
  },
  container: {
    paddingHorizontal: spacing[16],
  },
  scrollViewContent: {
    paddingHorizontal: spacing[4],
  },
  separator: {
    height: spacing[20],
  },
});
