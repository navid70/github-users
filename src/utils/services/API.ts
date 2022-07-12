export const searchUsers = async (name: string) => {
  let response = await fetch(`https://api.github.com/search/users?q=${name}`);
  let data = await response.json();
  return data;
};

export const findUser = async (name: string) => {
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json();
  return data;
};

export const getUserRepos = async (userName: string) => {
  let response = await fetch(`https://api.github.com/users/${userName}/repos`);
  let data = await response.json();
  return data;
};
