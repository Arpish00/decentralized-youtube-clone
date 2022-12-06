import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
uri: "https://api.thegraph.com/subgraphs/name/arpish00/arpish00",
cache: new InMemoryCache(),
});

export default client;
