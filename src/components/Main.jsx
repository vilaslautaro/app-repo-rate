import { View, Text } from "react-native";
import Constants from "expo-constants";
import React from "react";
import RepositoryList from "./RepositoryList";

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <RepositoryList />
    </View>
  );
};

export default Main;