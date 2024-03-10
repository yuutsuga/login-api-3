type UserCreateInput = {
  name: string,
  username: string
}

type UserUpdateInput = {
  name: string,
  username: string
}

type User = {
  id: number,
  name: string,
  username: string
}

export const userService = {
  create: async (user: UserCreateInput): Promise<User | null> => {
    /* Faça seu código de criação de usuário*/

    return null;
  },
  get: async (): Promise<Array<User>> => {
    /* Faça seu código de retorno de usuários*/

    return []
  },
  find: async (id: number): Promise<User | null> => {
    /* Faça seu código de busca de usuário*/

    return null;
  },
  update: async (id: number, user: UserUpdateInput): Promise<boolean> => {
    /* Faça seu código de edição de usuário*/

    return false;
  },
  delete: async (id: number): Promise<boolean> => {
    /* Faça seu código de deleção de usuário*/

    return false;
  }
}
