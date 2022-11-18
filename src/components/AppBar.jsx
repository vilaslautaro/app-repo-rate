import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";
import StyledText from "./StyledText";
import { theme } from "./theme";

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  const textStyles = [styles.text, active && styles.active];

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText style={textStyles} fontWeight="bold">
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View styles={styles.appBar}>
      <ScrollView horizontal style={styles.scrollContainer}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
  },
  scrollContainer: {
    paddingBottom: 15,
  },
  text: {
    paddingHorizontal: 10,
    color: theme.appBar.textSecondary,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});

export default AppBar;
