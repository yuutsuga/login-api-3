import prisma from "../database";

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
    const newUser = await prisma.user.create({
      data: user
    });

    return newUser;
  },
  get: async (): Promise<Array<User>> => {
    /* Faça seu código de retorno de usuários*/
    const usersInfo = await prisma.user.findMany({ });

    return usersInfo;
  },
  find: async (id: number): Promise<User | null> => {
    /* Faça seu código de busca de usuário*/
    const userInfoById = await prisma.user.findFirst({
      where: {
        id
      }
    });

    return userInfoById;
  },
  update: async (id: number, user: UserUpdateInput): Promise<boolean> => {
    /* Faça seu código de edição de usuário*/
    const userUpdated = await prisma.user.updateMany({
      where: {
        id
      },
      data: user
    });

    return userUpdated.count > 0;
  },
  delete: async (id: number): Promise<boolean> => {
    /* Faça seu código de deleção de usuário*/
    const userDeleted = await prisma.user.deleteMany({
      where: {
        id
      }
    });

    return userDeleted.count > 0;
  }
}
