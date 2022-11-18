import { Image, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";

const RepositoryItemHeader = ({ fullName, description, language }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{ uri: "https://ibb.co/RQmMnvt" }}
        />
      </View>
      <View style={styles.containerText}>
        <StyledText fontSize="subheading" fontWeight="bold">
          {fullName}
        </StyledText>
        <StyledText>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 2,
  },
  containerImage: {
    paddingRight: 10,
  },
  image: {
    width: 48,
    height: 48,
    margin: "auto",
    borderRadius: 4,
  },
  containerText: {
    flex: 1,
  },
});

export default RepositoryItemHeader;
