import { gql } from "apollo-server-express";

export const Schema = gql`
  type Trick {
    id: ID!
    name: String
    description: String
    videoUrl: String
  }

  type Query {
    getAllTricks: String
    getTrick(id: ID!): String
  }
`