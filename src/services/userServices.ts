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
  create: (user: UserCreateInput): User | null => {
    /* Faça seu código de criação de usuário*/

    return null;
  },
  get: (): Array<User> => {
    /* Faça seu código de retorno de usuários*/

    return []
  },
  find: (id: number): User | null => {
    /* Faça seu código de busca de usuário*/

    return null;
  },
  update: (id: number, user: UserUpdateInput): boolean => {
    /* Faça seu código de edição de usuário*/

    return false;
  },
  delete: (id: number): boolean => {
    /* Faça seu código de deleção de usuário*/

    return false;
  }
}
