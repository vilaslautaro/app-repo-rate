import { View, StyleSheet, Platform } from "react-native";
import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryStats from "./RepositoryStats";
import { theme } from "./theme";

const RepositoryItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>
      <RepositoryItemHeader
        fullName={repo.fullName}
        description={repo.description}
        language={repo.language}
      />
      <RepositoryStats
        stargazersCount={repo.stargazersCount}
        forksCount={repo.forksCount}
        reviewCount={repo.reviewCount}
        ratingAverage={repo.ratingAverage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  language: {
    padding: 4,
    marginVertical: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: "red",
      default: "purple",
    }),
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
  },
});

export default RepositoryItem;
