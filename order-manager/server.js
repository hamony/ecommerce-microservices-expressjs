import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import RootQueryType from "./graphql/queries/root-query.js";
import Mutation from "./graphql/mutations/order-mutation.js";

const env = process.env.NODE_ENV || 'development';
const app = express();

const schema = new GraphQLSchema({
      query: RootQueryType,
      mutation: Mutation
});
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: (env === 'development' || env === 'localhost'),
}));

export default app;