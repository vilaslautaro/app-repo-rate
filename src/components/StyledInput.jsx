import { StyleSheet, TextInput } from "react-native";

const StyledTextInput = ({ style = {}, ...props }) => {
  const inputStyle = {
    ...styles.textInput,
    ...style,
  };
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
  });

export default StyledTextInput;
