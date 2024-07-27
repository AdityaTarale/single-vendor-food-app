import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Easing,
} from "react-native";
import { getIcon } from "../../assets/constants";
import { Modal } from "./Modal";

type BottomSheetProps = PropsWithChildren & {
  isVisible: boolean;
  onClose: () => void;
};

export const BottomSheet: FC<BottomSheetProps> = ({
  isVisible,
  children,
  onClose,
}): ReactElement => {
  const XSvg = getIcon("x");
  const screenHeight = Dimensions.get("screen").height;
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: screenHeight,
        duration: 300,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, slideAnim, screenHeight]);

  return (
    <Modal visible={isVisible} onRequestClose={onClose}>
      <Animated.View
        style={[{ transform: [{ translateY: slideAnim }] }, styles.fullWidth]}
      >
        <View style={styles.bottomSheet}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            activeOpacity={1}
          >
            <XSvg color="black" />
          </TouchableOpacity>
          <View style={styles.content}>{children}</View>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  fullWidth: {
    flex: 1,
    width: "100%",
  },
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  content: {
    backgroundColor: "white",
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheet: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    gap: 5,
  },
  closeButton: {
    zIndex: 100,
    alignSelf: "center",
    padding: 12,
    backgroundColor: "white",
    borderRadius: 24,
  },
});
