import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import RootQueryType from "./graphql/root-query-type.js";

const env = process.env.NODE_ENV || 'development';
const app = express();

const schema = new GraphQLSchema({
      query: RootQueryType
});
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: (env === 'development' || env === 'localhost'),
}));

export default app;