import { test, expect } from '@jest/globals';
import { userService } from '../src/services/userServices';

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

let temporaryUser: User;

test('Creating User', () => {
  const user: UserCreateInput = {
    name: `name-example-${Date.now()}`,
    username: `username-example-${Date.now()}`
  };

  const userResult = userService.create(user);

  expect(userResult).toBeTruthy();

  if(!userResult)
    return;

  expect(userResult.name).toBe(user.name);
  expect(userResult.username).toBe(user.username);

  temporaryUser = userResult;
});

test('Finding User', () => {
  const userResult = userService.find(temporaryUser.id);

  expect(userResult).toMatchObject(temporaryUser);
});

test('Getting Users', () => {
  const usersResult = userService.get();
  const user = usersResult.find(user => user.id === temporaryUser.id);

  expect(user).toMatchObject(temporaryUser);
});

test('Updating User', () => {
  const updated = userService.update(temporaryUser.id, {
    ...temporaryUser
  });
  const nonUpdated = userService.update(-1, {
    ...temporaryUser
  });

  expect(updated).toBeTruthy();
  expect(nonUpdated).toBeFalsy();
});

test('Deleting User', () => {
  const deleted = userService.delete(temporaryUser.id);
  const nonDeleted = userService.delete(-1);

  expect(deleted).toBeTruthy();
  expect(nonDeleted).toBeFalsy();
});
