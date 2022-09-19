const { gql, ApolloServer  } = require("apollo-server");
/**
 * Aliases => Ajuda a fazer mais de uma consulta, dando apelidos para uma query
 * Fragmensts => Unidades reutilizaveis, construi conjuntos de campos, 
 * e incluir nas pesquisas
 * 
 */



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