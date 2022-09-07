const { gql, ApolloServer } = require("apollo-server")


const produtos = [
  {
    id: 1,
    nome: 'Notebook',
    valor: 12000.32
  },
  {
    id: 2,
    nome: 'Smarthphone',
    valor: 6000.32
  }
]

const usuarios = [
  {
    id: 1,
    nome: 'Eduardo',
    ativo: true,
    idade: 30
  },
  {
    id: 2,
    nome: 'Maria',
    ativo: true,
    idade: 28
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
    usuarios() {
      return usuarios
    },
    produtos() {
      return produtos
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()