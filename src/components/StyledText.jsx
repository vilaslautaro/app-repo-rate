import { StyleSheet, Text } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: "grey",
  },
  bold: {
    fontWeight: "bold",
  },
  blue: {
    color: "blue",
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 10,
  },
});

const StyledText = ({ blue, bold, children, big, small }) => {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    big && styles.big,
    small && styles.small,
    bold && styles.bold,
  ];
  return <Text style={textStyles}>{children}</Text>;
};

export default StyledText;
