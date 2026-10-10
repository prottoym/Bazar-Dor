// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "@better-auth/mongo-adapter";
// import { nextCookies } from "better-auth/next-js";

// const client = new MongoClient(process.env.MONGODB_URL as string);
// const db = client.db("Bazar-Dor-Data");


// export const auth = betterAuth({
//   database: mongodbAdapter(db),

//   emailAndPassword: {
//     enabled: true,
//   },
//    socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     },
//     github: {
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     },
//   },
//   plugins: [nextCookies()],
// });

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { nextCookies } from "better-auth/next-js";

const client = new MongoClient(process.env.MONGODB_URL!);
const db = client.db("Bazar-Dor-Data");

export const auth = betterAuth({
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },

    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },

  plugins: [nextCookies()],
});