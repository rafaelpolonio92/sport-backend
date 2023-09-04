import { Trick, User } from '../entities';

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
    },
    Mutation: {
      createUser: async (_: any, args: any): Promise<User> => {
        const { name, email, password, google } = args;

        // Input Validation
        if (!email.includes('@')) {
          throw new Error('Invalid email');
        }

        if (password.length < 8) {
          throw new Error('Password must be at least 8 characters long');
        }

        // Check if email is already taken
        const existingUser = await User.findOne({ 
          where: { 
            email 
          } 
        });
        if (existingUser) {
          throw new Error('Email is already in use');
        }

        // Create user
        const user = User.create({ name, email, password, google });
        await user.save();

        return user;
      }
    }
};