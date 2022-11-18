import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import { theme } from "./theme";

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});

const AppBar = () => {
  return (
    <View styles={styles.appBar}>
      <StyledText style={styles.text} fontWeight="bold">
        Repositories
      </StyledText>
    </View>
  );
};

export default AppBar;
