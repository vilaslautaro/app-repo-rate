import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import { theme } from "./theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
  },
  text: {
    paddingHorizontal: 10,
    color: theme.appBar.textPrimary,
  },
});

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText style={styles.text} fontWeight="bold">
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View styles={styles.appBar}>
      <AppBarTab active={true} to="/">
        Repositories
      </AppBarTab>
      <AppBarTab active={true} to="/signin">
        Sign In
      </AppBarTab>
    </View>
  );
};

export default AppBar;
