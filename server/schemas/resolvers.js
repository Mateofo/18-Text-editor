const { User } = require('../models');
const {signToken} = require ('../utils/auth')
const resolvers = {
  Query: {
    me: async (parents, args, context) => {
     
    },
   
  },
  Mutation: {
    addUser: async (parent, args) => {
      console.log("args:", args);

      const user = await User.create(args);
      console.log("user:", user);
      const token = signToken(user);
      console.log("token:", token);
      return { token, user };
    },
  },
};

module.exports = resolvers;