const { gql, ApolloServer } = require("apollo-server")

const typeDefs = gql`
  type Query {
    idade: Int
    nome: String
    ativo: Boolean
    id: ID
    tecnologias: [String]
  }
`
const resolvers = {
  Query: {
    idade() {
      return 30;
    },
    nome() {
      return "Eduardo"
    },
    tecnologias() {
      return ['GraphQL', 'ReactJS', 'CSS'];
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()