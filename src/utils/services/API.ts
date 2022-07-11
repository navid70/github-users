export const searchUsers = async (name: string) => {
  let response = await fetch(`https://api.github.com/search/users?q=${name}`);
  let data = await response.json();
  return data;
};
