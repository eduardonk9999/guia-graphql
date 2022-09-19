const { gql, ApolloServer  } = require("apollo-server");

const db = [
  {
    id: 1,
    nome: "Pedro",
    email:"pedro@email.com",
    telefone: "11 1234 1234",
    perfil: 1,
  },
  {
    id: 2,
    nome: "João",
    email:"joão@email.com",
    telefone: "34 1234 1234",
    perfil: 2
  }
]

const perfis = [
  { id: 1, descricao: "ADMIN"},
  { id: 2, descricao: "NORMAL"}
]

const typeDefs = gql`
  type Usuario {
    id: Int
    nome: String
    email: String
    telefone: String
    perfil: Perfil
  }

  type Perfil {
    id: Int
    descricao: String
  }

  type Query {
    usuario(id: Int): Usuario
    perfis: [Perfil]
  }
`;

const resolvers = {
  Usuario: {
    perfil(args) {
      return perfis.find(p => p.id === args.perfil)
    }
  },
  Query: {
    // o primeiro argumento é undefined, por isso, passamos o args como segundo argumento.
    usuario(_, args) {
      return db.find(db => db.id === args.id)
    },
    perfis() {
      return perfis
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()