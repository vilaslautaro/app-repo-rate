import { Image, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const RepositoryItemHeader = ({repo}) => {
  return (
    <>
      <Image style={styles.image} source={{ uri: "https://ibb.co/RQmMnvt" }} />
      <StyledText fontSize="subheading" fontWeight="bold">
        {repo.fullName}
      </StyledText>
      <StyledText>{repo.description}</StyledText>
      <StyledText style={styles.language}>{repo.language}</StyledText>
    </>
  );
};


const styles = StyleSheet.create({
    image: {
      width: 48,
      height: 48,
      margin: "auto",
      borderRadius: 4,
    },
  });

export default RepositoryItemHeader;
