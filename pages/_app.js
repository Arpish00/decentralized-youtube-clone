import "../styles/globals.css";
import { LivepeerConfig } from "@livepeer/react";
import LivePeerClient from "./livepeer";
import client from "./client";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
            <LivepeerConfig client={LivePeerClient}>
          <Component {...pageProps} />
            </LivepeerConfig>
    </ApolloProvider>
  );
}

export default MyApp;
