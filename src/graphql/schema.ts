import { gql } from "apollo-server-express";

export const Schema = gql`
  type Trick {
    id: String!
    name: String
    description: String
    videoUrl: String
    imageUrl: String
  }

  type Query {
    getAllTricks: [Trick]
    getTrickById(id: String): Trick
  }
`