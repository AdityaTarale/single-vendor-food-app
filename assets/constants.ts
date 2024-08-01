import { FC } from "react";
import { SvgProps } from "react-native-svg";
import heart from "./svg/heart.svg";
import star from "./svg/star.svg";
import search from "./svg/search.svg";
import mic from "./svg/mic.svg";
import x from "./svg/x.svg";

export const icons = {
  heart,
  star,
  search,
  mic,
  x,
};

export type Icon = keyof typeof icons;

export const getIcon = (iconKey: Icon): FC<SvgProps> => {
  return icons[iconKey];
};
