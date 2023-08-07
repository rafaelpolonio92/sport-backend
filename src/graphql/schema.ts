import { gql } from "apollo-server-express";

export const Schema = gql`
  type Trick {
    id: ID!
    name: String
    description: String
    videoUrl: String
    imageUrl: String
  }

  type Query {
    getAllTricks: [Trick]
    getTrickById(id: ID!): Trick
  }
`