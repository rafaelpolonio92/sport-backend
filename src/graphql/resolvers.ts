import { Trick } from '../entity';

export const Resolvers = {
    Query: {
      getAllTricks: () => Trick.find(),
      getTrickById: (_: any, id: any): Promise<Trick | null>  => {
       return Trick.findOne({
        where: {
          id
        }
       })
      }
    }
};