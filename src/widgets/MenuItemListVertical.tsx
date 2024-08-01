import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MenuCardLarge from '../components/MenuCardLarge';
import spacing from '../theme/spacing';
import {BottomSheet, Text} from '../elements';
import {MenuType} from '../types/menu';
import MenuDetailScreen from '../pages/menuDetail/MenuDetailScreen';

type MenuItemListVerticalProps = {
  menuItems: MenuType[];
};

const MenuItemListVertical: FC<MenuItemListVerticalProps> = ({menuItems}) => {
  const [isVisible, setIsVisible] = useState(false);

  const openBottomSheet = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.listWidget}>
      <Text variant="titleMedium">Menus to Explore</Text>
      <View style={styles.listItems}>
        {menuItems?.map(menu => {
          return (
            <MenuCardLarge
              key={menu.name}
              {...menu}
              onPress={openBottomSheet}
            />
          );
        })}
      </View>
      <BottomSheet isVisible={isVisible} onClose={openBottomSheet}>
        <MenuDetailScreen />
      </BottomSheet>
    </View>
  );
};

export default MenuItemListVertical;

const styles = StyleSheet.create({
  listWidget: {
    gap: spacing[10],
    paddingHorizontal: spacing[16],
  },
  listItems: {gap: spacing[24]},
  scrollViewContent: {
    paddingHorizontal: spacing[4],
  },
  separator: {
    height: spacing[20],
  },
});
