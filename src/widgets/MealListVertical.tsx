import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import MealCardLarge from "../components/MealCardLarge";
import spacing from "../theme/spacing";
import { BottomSheet, Text } from "../elements";
import { MealType } from "../types/meal";
import MealDetailScreen from "../pages/mealDetail/MealDetailScreen";

type MealListVerticalProps = {
  meals: MealType[];
};

const MealListVertical: FC<MealListVerticalProps> = ({ meals }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openBottomSheet = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.listWidget}>
      <Text variant="titleMedium">Meals to Explore</Text>
      <View style={styles.listItems}>
        {meals.map((meal) => {
          return (
            <MealCardLarge
              key={meal.name}
              {...meal}
              onPress={openBottomSheet}
            />
          );
        })}
      </View>
      <BottomSheet isVisible={isVisible} onClose={openBottomSheet}>
        <MealDetailScreen />
      </BottomSheet>
    </View>
  );
};

export default MealListVertical;

const styles = StyleSheet.create({
  listWidget: {
    gap: spacing[3],
    paddingHorizontal: spacing[5],
  },
  listItems: { gap: spacing[7] },
  scrollViewContent: {
    paddingHorizontal: spacing[1],
  },
  separator: {
    height: spacing[6],
  },
});
