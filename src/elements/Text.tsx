import { FC } from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  StyleSheet,
} from "react-native";
import typography from "../theme/typography";
import colors from "../theme/colors";

type TextProps = RNTextProps & {
  variant: keyof typeof typography;
  color?: keyof typeof colors;
  style?: StyleProp<TextProps>;
};

export const Text: FC<TextProps> = ({
  children,
  variant,
  style,
  color = "black",
  ...rest
}) => {
  const textStyle = typography[variant];
  const textColor = colors[color];
  return (
    <RNText style={[textStyle, { color: textColor }, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({});
