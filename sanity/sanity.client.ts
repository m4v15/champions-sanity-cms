import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: process.env.SANITY_ID,
  dataset: "production",
  apiVersion: "2025-01-11",
  useCdn: false,
};

const client = createClient(config);

export default client;