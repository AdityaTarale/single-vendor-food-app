import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { lightenColor } from "../theme/colors";
import spacing from "../theme/spacing";
import { getIcon } from "../../assets/constants";

export const SearchInput = () => {
  const SearchSvg = getIcon("search");
  const MicSvg = getIcon("mic");

  return (
    <View style={styles.container}>
      <SearchSvg color={"black"} width={20} />
      <TextInput
        editable={false}
        placeholder="Search for your favorite dish"
        style={styles.textInput}
      />
      <MicSvg color={"black"} width={20} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    gap: spacing[8],
    padding: spacing[8],
    backgroundColor: lightenColor("gray", 80),
    borderRadius: spacing[10],
    paddingHorizontal: spacing[16],
  },
  textInput: {
    fontFamily: "Celias-Medium",
    flex: 1,
    marginLeft: spacing[8],
    marginRight: spacing[8],
  },
});
