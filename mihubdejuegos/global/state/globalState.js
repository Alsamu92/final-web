

const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};

let userData = localStorage.getItem(currentUser.name)
  ? JSON.parse(localStorage.getItem(currentUser.name))
  : {
      name: "",
      token: true,
      fav: [],
    };


const dataGlobal = {
  pokemon: [],
  
};

export const setUser = (username) => {
  currentUser.name = username;
};

export const getUser = () => {
  return currentUser;
};

export const setData = (data, page) => {
  switch (page) {
    case "Pokemon":
      dataGlobal.pokemon = data;

      break;

    default:
      break;
  }
};

export const setUserData = (data) => {

  userData.fav = data?.fav;
  userData.name = data?.name;

  const stringUser = JSON.stringify(userData);
  localStorage.removeItem(`${currentUser.name}`);
  console.log(userData.name);
  localStorage.setItem(`${currentUser.name}`, stringUser);
};

export const getUserData = () => {
  return userData;
};


export const getData = (page) => {
  switch (page) {
    case "Pokemon":
      return dataGlobal.pokemon;
    default:
      break;
  }
  return dataGlobal;
};
