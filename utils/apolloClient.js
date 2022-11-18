import ApolloClient from "apollo-boost";

export const createApolloClient = () =>
  new ApolloClient({
    uri: "http://192.168.1.188:5000/api/repositories",
  });
