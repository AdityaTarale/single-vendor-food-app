import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { SearchInput } from "../elements";
import spacing from "../theme/spacing";
import colors from "../theme/colors";

type SearchWidgetProps = {
  onPress: () => void;
};

const SearchWidget: FC<SearchWidgetProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <SearchInput />
    </Pressable>
  );
};

export default SearchWidget;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[12],
    paddingBottom: spacing[12],
    backgroundColor: colors.white,
  },
});
