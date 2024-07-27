import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import spacing from "../theme/spacing";
import { Text } from "../elements";
import { MealType } from "../types/meal";
import { getIcon } from "../../assets/constants";
import colors from "../theme/colors";

type MealCardLargeProps = MealType & {
  onPress: () => void;
};

const MealCardLarge: FC<MealCardLargeProps> = ({
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
          <HeartSvg color={colors.gray} width={18} height={18} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: img_url }} style={styles.image} />
        </View>
        <View>
          <Text variant="titleSmall">{name}</Text>
          <Text variant="bodySmall" numberOfLines={1} ellipsizeMode="tail">
            {ingredients}
          </Text>
          <View style={styles.cardFooter}>
            <Text variant="bodySmall">$4.99</Text>
            <Text variant="bodySmall">|</Text>
            <StarSvg color={colors.yellow} width={12} height={12} />
            <Text variant="bodySmall">4.9</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MealCardLarge;

const styles = StyleSheet.create({
  card: {
    width: 130,
    marginHorizontal: spacing[2],
    gap: spacing[2],
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
    marginTop: spacing[1],
  },
  imageContainer: {
    backgroundColor: "#afafaf30",
    width: 130,
    height: 140,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  wishList: {
    position: "absolute",
    right: 8,
    top: 8,
    zIndex: 5,
    backgroundColor: "white",
    padding: 4,
    borderRadius: 24,
  },
});
