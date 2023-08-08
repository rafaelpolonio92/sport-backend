import { Trick } from '../entity';

export const Resolvers = {
    Query: {
      getAllTricks: () => Trick.find(),
      getTrickById: (_: any, args: any): Promise<Trick | null>  => {
        const { id } = args;
        const trick = Trick.findOne({
          where: {
            id
          }
        })
        return trick
      }
    }
};