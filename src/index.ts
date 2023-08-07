import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { Schema, Resolvers } from './graphql';
import { AppDataSource } from './data-source';
import { Trick } from './entity'

const startServer = async (schema: any, resolvers: any): Promise<void> => {
  const app = express();
  
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });
  AppDataSource.initialize().then(() => {
    console.log('Database connected')
  }).catch((error) => console.log(error));
  const PORT = 4000;
  
  app.listen({ port: PORT }, () => {
    console.log(`Server listening on port ${PORT}`)
  })
}

startServer(Schema, Resolvers);