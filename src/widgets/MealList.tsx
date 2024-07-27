import React, { FC, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import MealCard from "../components/MealCard";
import spacing from "../theme/spacing";
import { MealType } from "../types/meal";
import { BottomSheet, Text } from "../elements";
import MealDetailScreen from "../pages/mealDetail/MealDetailScreen";

type MealListProps = {
  meals: MealType[];
};

const MealList: FC<MealListProps> = ({ meals }) => {
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
        {meals.map((meal) => {
          return (
            <MealCard key={meal.name} {...meal} onPress={openBottomSheet} />
          );
        })}
      </ScrollView>

      <BottomSheet isVisible={isVisible} onClose={openBottomSheet}>
        <MealDetailScreen />
      </BottomSheet>
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  listWidget: {
    gap: spacing[3],
  },
  container: {
    paddingHorizontal: spacing[5],
  },
  scrollViewContent: {
    paddingHorizontal: spacing[1],
  },
  separator: {
    height: spacing[6],
  },
});
