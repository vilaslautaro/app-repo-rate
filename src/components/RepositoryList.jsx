import { View, Text, FlatList } from "react-native";
import { useRepositories } from "../../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  if (loading) return "Cargando...";

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
