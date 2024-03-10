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
    return null;
  },
  get: (): Array<User> => {
    return []
  },
  find: (id: number): User | null => {
    return null;
  },
  update: (id: number, user: UserUpdateInput): boolean => {
    return false;
  },
  delete: (id: number): boolean => {
    return false;
  }
}
