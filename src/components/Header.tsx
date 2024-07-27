import React from "react";
import { StyleSheet, View } from "react-native";
import spacing from "../theme/spacing";
import { Text } from "../elements";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text variant="labelMedium">Delivery at</Text>
        <Text variant="headlineSmall">My Home</Text>
        <Text variant="bodyMedium">
          Mahalaxmi nagar, Bombay Hospital Indore
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing[12],
  },
});
