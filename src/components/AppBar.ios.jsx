import { View, Text, ScrollView } from "react-native";

const IOSAppBar = () => {
  return (
    <View styles={styles.appBar}>
      <ScrollView horizontal style={styles.scrollContainer}>
        <Text>Repositories</Text>
        <Text>Sign In</Text>
      </ScrollView>
    </View>
  );
};

export default IOSAppBar;
