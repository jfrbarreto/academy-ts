// list, create, edit e delete
const UserDatabase = "users-local-db";
import { User } from "../store/user/types";

export const getAll = (): Array<User> =>
  JSON.parse(localStorage.getItem(UserDatabase));
export const getUser = (userId: number): User =>
  JSON.parse(localStorage.getItem(UserDatabase)).filter(
    (item: User) => item.id === userId
  );
export const createUser = (user: User): void => {
  let localDB: Array<User> = getAll();
  if (localDB && localDB.length) {
    localDB.push({
      id:
        localDB.sort((a, b) => (a.id > b.id ? 1 : -1))[localDB.length - 1].id +
        1,
      name: user.name,
      address: user.address,
      age: user.age
    });
    localStorage.setItem(UserDatabase, JSON.stringify(localDB));
  } else {
    localStorage.setItem(
      UserDatabase,
      JSON.stringify([
        { id: 0, name: user.name, address: user.address, age: user.age }
      ])
    );
  }
};
export const deleteUser = (userId: number): void => {
  let localDB: Array<User> = getAll();
  const result = localDB.filter(item => item.id !== userId);
  console.log(result);
  localStorage.setItem(UserDatabase, JSON.stringify(result));
};
export const updateUser = (editedUser: User): void => {
  let localDB: Array<User> = getAll();

  console.log(editedUser);

  localDB.map((item, index, array) => {
    if (item.id === editedUser.id) {
      array[index] = editedUser;
    }

    return array[index];
  });

  console.log(localDB);

  localStorage.setItem(UserDatabase, JSON.stringify(localDB));
};

export const initLocalDB = (): void => {
  /*   console.log('unit')
  localStorage.removeItem(UserDatabase);
  const dummyUsers1: User = {
    name: "John",
    address: "1st Street",
    age: 18
  };
  const dummyUsers2: User = {
    name: "Mary",
    address: "2st Street",
    age: 32
  };
  const dummyUsers3: User = {
    name: "Arthur",
    address: "3st Street",
    age: 56
  };

  createUser(dummyUsers1);
  createUser(dummyUsers2);
  createUser(dummyUsers3); */
};

export const get = (payload?: number) => {
  if (payload) {
    return JSON.parse(localStorage.getItem(UserDatabase));
  } else {
  }
};
