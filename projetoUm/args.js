const { gql, ApolloServer  } = require("apollo-server");

const db = [
  {
    id: 1,
    nome: "Pedro",
    email:"pedro@email.com",
    telefone_fixo: "11 1234 1234"
  },
  {
    id: 2,
    nome: "João",
    email:"joão@email.com",
    telefone: "34 1234 1234"
  }
]

const typeDefs = gql`
  type Usuario {
    id: Int
    nome: String
    email: String
    telefone: String
  }

  type Query {
    usuario: Usuario
  }
`;

const resolvers = {
  Usuario: {
    telefone() {
      return "123"
    }
  },
  Query: {
    usuario() {
      return db[0]
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()