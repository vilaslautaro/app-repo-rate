import { View, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../src/components/StyledInput";

const initialValues = {
  email: "",
  password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <StyledTextInput
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  );
};

const LoginScreen = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              placeholder="Email"
              name="email"
            ></FormikInputValue>
            <FormikInputValue
              placeholder="Password"
              name="password"
              secureTextEntry
            ></FormikInputValue>
            <Button onPress={handleSubmit} title={"Login"} />
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

export default LoginScreen;
