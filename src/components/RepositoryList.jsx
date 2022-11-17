import { View, Text, FlatList } from "react-native";
import React from "react";
import { repositories } from "../../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <View>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({ item: repo }) => <RepositoryItem repo={repo} />}
      />
    </View>
  );
};

export default RepositoryList;
