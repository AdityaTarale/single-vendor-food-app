import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { MenuType } from "../types/menu";
import { Text } from "../elements";
import spacing from "../theme/spacing";
import { getIcon } from "../../assets/constants";
import colors, { lightenColor } from "../theme/colors";

type MenuCardLargeProps = MenuType & {
  onPress: () => void;
};

const MenuCardLarge: FC<MenuCardLargeProps> = ({
  name,
  img_url,
  ingredients,
  onPress,
}) => {
  const HeartSvg = getIcon("heart");
  const StarSvg = getIcon("star");

  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.wishList}>
          <HeartSvg color={lightenColor("black", 40)} width={18} height={18} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: img_url }} style={styles.image} />
        </View>
        <View>
          <Text variant="titleMedium">{name}</Text>
          <View style={styles.cardFooter}>
            <View>
              <Text variant="bodySmall">{ingredients.slice(0, 25)}...</Text>
            </View>
            <View style={styles.cardFooter}>
              <Text variant="bodySmall">$4.99</Text>
              <Text variant="bodySmall">|</Text>
              <StarSvg color={colors.yellow} width={12} height={12} />
              <Text variant="bodySmall">4.9</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MenuCardLarge;

const styles = StyleSheet.create({
  card: {},
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing[8],
  },
  imageContainer: {
    backgroundColor: "#afafaf30",
    width: "100%",
    height: spacing[200],
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: spacing[16],
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  wishList: {
    position: "absolute",
    right: spacing[8],
    top: spacing[8],
    zIndex: 1,
    backgroundColor: "white",
    padding: spacing[4],
    borderRadius: spacing[24],
  },
});
