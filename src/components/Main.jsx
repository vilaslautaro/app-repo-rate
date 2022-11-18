import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <Text>Working on it</Text>
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
