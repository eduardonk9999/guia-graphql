const { gql, ApolloServer  } = require("apollo-server");
/**
 * 
 *  */



const db = {
  usuarios: [
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
  ],
  perfis: [
    { id: 1, descricao: "ADMIN"},
    { id: 2, descricao: "NORMAL"}
  ]
}



const typeDefs = gql`
  enum TipoPerfil {
    ADMIN
    NORMAL
  }


  type Usuario {
    id: Int
    nome: String
    email: String
    telefone: String
    perfil: Perfil
  }

  type Perfil {
    id: Int
    descricao: TipoPerfil
  }

  type Query {
    usuario(id: Int): Usuario
    perfis: [Perfil]
  }
`;

const resolvers = {
  Usuario: {
    perfil(usuario) {
      return db.perfis.find((p) => p.id === usuario.perfil)
    }
  },
  Query: {
    usuario(obj, args) {
      return db.usuarios.find((db) => db.id === args.id)
    },
    perfis() {
      return db.perfis
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()