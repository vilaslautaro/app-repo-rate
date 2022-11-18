import { StyleSheet, TextInput } from "react-native";

const StyledTextInput = ({ style = {}, error, ...props }) => {
  const inputStyle = [styles.textInput, style, error && styles.error];
  return <TextInput style={inputStyle} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  error: { borderColor: "red" },
});

export default StyledTextInput;
