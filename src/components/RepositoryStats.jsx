import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.rounder(value / 100) / 10}k` : String(value);
};

const RepositoryStats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  return (
    <View style={styles.container}>
      <View>
        <StyledText align="center" fontWeight="bold">
          Starts
        </StyledText>
        <StyledText align="center">
          {" "}
          {parseThousands(stargazersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Forks
        </StyledText>
        <StyledText align="center">
          {parseThousands(forksCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Review
        </StyledText>
        <StyledText align="center">{reviewCount}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Rating
        </StyledText>
        <StyledText align="center">{ratingAverage}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default RepositoryStats;
