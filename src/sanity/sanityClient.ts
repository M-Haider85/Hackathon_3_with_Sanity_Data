import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '6ryxllm6', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name (e.g., 'production')
  apiVersion: '2023-01-01',     // Use a valid API version (adjust to your requirements)
  useCdn: true,                 // `true` for faster, cacheable reads; `false` for fresh data
});
