import { Pressable, PressableProps, StyleSheet } from "react-native";
import React, { FC } from "react";
import colors from "../theme/colors";
import Text from "./Text";

interface ButtonProps extends PressableProps {
  color?: keyof typeof colors;
  title: string;
  onPress?: () => void;
}

export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  color = "black",
}) => {
  const bgColor = colors[color];
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: bgColor }]}
    >
      <Text variant="bodyLarge" color="white">
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#3286FC",
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
