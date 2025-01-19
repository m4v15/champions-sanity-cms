import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "whsvh8u8",
  dataset: "production",
  apiVersion: "2025-01-11",
  useCdn: true,
};

const client = createClient(config);

export default client;
