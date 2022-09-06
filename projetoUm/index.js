const { gql, ApolloServer } = require("apollo-server")


const produtos = [
  {
    id: 1,
    nome: 'Notebook',
    valor: 12000.32
  }
]


const typeDefs = gql`
  type Produto {
    id: ID
    nome: String
    valor: Float
  }

  type Usuario {
    idade: Int
    nome: String
    ativo: Boolean
    id: ID
  }
  
  type Query {
    usuarios: [Usuario]
    produtos: [Produto]
  }
`
const resolvers = {
  Query: {
    
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()