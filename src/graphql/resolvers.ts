export const Resolvers = {
    Query: {
      getAllTricks: () => 'Rafael',
      getTrick: (_: any, id: any) => {
        console.log(id)
        return 'test'
      }
    }
};