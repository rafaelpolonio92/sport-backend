import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { Schema, Resolvers } from './graphql';

const startServer = async (schema: any, resolvers: any): Promise<void> => {
  const app = express();
  
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });
  
  const PORT = 4000;
  
  app.listen({ port: PORT }, () => {
    console.log(`Server listening on port ${PORT}`)
  })
}

startServer(Schema, Resolvers);