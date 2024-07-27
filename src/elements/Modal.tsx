import React, { FC, PropsWithChildren, ReactElement } from "react";
import {
  Modal as RNModal,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

interface ModalProps extends PropsWithChildren {
  visible: boolean;
  onRequestClose?: () => void;
  style?: ViewStyle;
}

export const Modal = ({
  children,
  visible = false,
  onRequestClose,
  style = {},
}: ModalProps): ReactElement => {
  return (
    <RNModal
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}
      animationType="fade"
    >
      <View style={[styles.background, style]}>{children}</View>
    </RNModal>
  );
};

interface SectionProps extends PropsWithChildren {
  style?: ViewStyle;
}

const ModalContainer: FC<SectionProps> = ({ children, style = {} }) => (
  <View style={[styles.container, style]}>{children}</View>
);

interface HeaderProps extends SectionProps {
  title: string;
}

const ModalHeader: FC<HeaderProps> = ({ title, style = {} }) => (
  <View style={[styles.header, style]}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const ModalBody: FC<SectionProps> = ({ children, style = {} }) => (
  <View style={[styles.body, style]}>{children}</View>
);

const ModalFooter: FC<SectionProps> = ({ children, style = {} }) => (
  <View style={[styles.footer, style]}>{children}</View>
);

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;

const bgColor = "rgba(0,0,0,0.7)";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor,
  },
  container: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 24,
    alignItems: "center",
    overflow: "hidden",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  body: {
    justifyContent: "center",
    paddingHorizontal: 24,
    minHeight: 100,
    width: "100%",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    width: "100%",
  },
});
