import { View, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../src/components/StyledInput";
import StyledText from "../src/components/StyledText";
import { loginValidationSchema } from "../validationSchemes/Login";

const initialValues = {
  email: "",
  password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

const LoginScreen = () => {
  return (
    <Formik
      validationSchema={loginValidationSchema}
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
  error: {
    color: "red",
    fontSize: 12,
    marginTop: -10,
    marginBottom: 20,
  },
});

export default LoginScreen;
