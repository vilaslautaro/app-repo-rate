import { StyleSheet, Text } from "react-native";
import { theme } from "./theme";

const styles = StyleSheet.create({
  text: {
    fontSizes: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textPrimary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

const StyledText = ({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  center,
  ...rest
}) => {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    align === "center" && styles.textAlignCenter.textAlign,
    style,
  ];
  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
};

export default StyledText;
