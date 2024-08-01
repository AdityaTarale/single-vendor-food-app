import {FC} from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';

type TextProps = RNTextProps & {
  variant: keyof typeof typography;
  color?: keyof typeof colors;
  style?: TextStyle;
};

export const Text: FC<TextProps> = ({
  children,
  variant,
  style,
  color = 'black',
  ...rest
}) => {
  const textStyle = typography[variant];
  const textColor = colors[color];
  return (
    <RNText style={[textStyle, {color: textColor}, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({});
