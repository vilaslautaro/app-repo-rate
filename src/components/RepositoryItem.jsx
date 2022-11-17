import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StyledText from "./StyledText";



const RepositoryItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>
      <StyledText bold big>id: {repo.id}</StyledText>
      <StyledText bold big blue>fullName: {repo.fullName}</StyledText>
      <StyledText small>description: {repo.description}</StyledText>
      <StyledText small>language: {repo.language}</StyledText>
      <StyledText small>starts: {repo.stargazersCount}</StyledText>
      <StyledText small>forks: {repo.forksCount}</StyledText>
      <StyledText small>review: {repo.reviewCount}</StyledText>
      <StyledText small>rating: {repo.ratingAverage}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 5,
      paddingTop: 5,
    },
    strong: {
      color: "#09f",
      fontWeight: "bold",
      marginBottom: 5,
    },
  });

export default RepositoryItem;
