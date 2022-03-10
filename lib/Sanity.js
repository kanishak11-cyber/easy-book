import sanityClient from "@sanity/client";
export const client = sanityClient({
    // projectId: process.env.SANITY_PROJECT_ID,
  projectId: "p49yqdyy",
  dataset: "production",
    // token: process.env.SANITY_TOKEN,
  token:
    "skVRM9u8EJ2vXQLK3PBQGTtw2qqWNTK8PZ7k43aQmVbt9QgZuE2yT0XKQMtUAN0dUWKxKA3z6G7LnyLbE9rmOg63FINz0dc4QuS4mn3e0773hLJ4CrUeq8FN2cWgEWvr45mPOzes7npCmiWBBWhZv58oIsObAw1dQ07otG4njr4ODfji2bXn",
  useCdn: false,
  apiVersion: "v1",
});