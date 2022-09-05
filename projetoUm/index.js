const { gql, ApolloServer } = require("apollo-server")

const typeDefs = gql`
  type Usuario {
    idade: Int
    nome: String
    ativo: Boolean
    id: ID
  }
  type Query {
    usuario: Usuario
  }
`
const resolvers = {
  Query: {
    usuario() {
      return {
        id: 1,
        nome: 'Edu',
        ativo: true,
        idade: 30
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()