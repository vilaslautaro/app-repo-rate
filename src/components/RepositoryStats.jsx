import { StyleSheet, View } from "react-native";
import { parseThousands } from "../../utils/parseThousand";
import StyledText from "./StyledText";

const RepositoryStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(stargazersCount)}
        </StyledText>
        <StyledText align="center">Starts</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(forksCount)}
        </StyledText>
        <StyledText align="center">Forks</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {reviewCount}
        </StyledText>
        <StyledText align="center">Review</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {ratingAverage}
        </StyledText>
        <StyledText align="center">Rating</StyledText>
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
