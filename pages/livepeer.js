import { createReactClient } from "@livepeer/react";
import { studioProvider } from "livepeer/providers/studio";


const LivePeerClient = createReactClient({
  provider: studioProvider({ apiKey: "e99dba79-c32a-4ba7-98b5-cbcbc8467a7f" }),
});

export default LivePeerClient;