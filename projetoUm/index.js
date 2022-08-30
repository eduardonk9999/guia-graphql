const { gql, ApolloServer } = require("apollo-server")

const typeDefs = gql`
  type Query {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
  }
`
const resolvers = {
  Query: {
    idade() {
      return 30;
    },
    salario() {
      return 10000
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()