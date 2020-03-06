// list, create, edit e delete
const UserDatabase = "users-local-db";

export type LSUser = {
  id?: number;
  name: string;
  address: string;
  age: number;
};


const LSGetAll = (): Array<LSUser> => {
  return JSON.parse(localStorage.getItem(UserDatabase));
};

const LSGet = (userId: number): LSUser => {
  const localDB = JSON.parse(localStorage.getItem(UserDatabase));
  return localDB.filter((item: LSUser) => item.id === userId);
};

const LSSet = (localDB: Array<LSUser>) => {};

const LSCreate = (user: LSUser): void => {
  let localDB: Array<LSUser> = LSGetAll();

  console.log(localDB, user);

  if (localDB) {
/*     const sortedDB = localDB.entries.sort((a, b) => (a.id > b.id ? 1 : -1));

    console.log(sortedDB);

    user.id = sortedDB[localDB.entries.length - 1].id + 1;
    localDB.entries.push(user)
    localStorage.setItem(UserDatabase, JSON.stringify({ entries: user })); */
  } else {
    user.id = 0;
    localDB.push({id: 0, name: user.name, address: user.address, age: user.age})
    localStorage.setItem(UserDatabase, JSON.stringify({ localDB }));
  }
};

export const initLocalDB = (): void => {
  const dummyUsers1: LSUser = {
    name: "John",
    address: "1st Street",
    age: 18
  };
  const dummyUsers2: LSUser = {
    name: "Mary",
    address: "2st Street",
    age: 32
  };
  const dummyUsers3: LSUser = {
    name: "Arthur",
    address: "3st Street",
    age: 56
  };

  LSCreate(dummyUsers1);
  LSCreate(dummyUsers2);
  LSCreate(dummyUsers3);
};

export const get = (payload?: number) => {
  if (payload) {
    return JSON.parse(localStorage.getItem(UserDatabase));
  } else {
  }
};
