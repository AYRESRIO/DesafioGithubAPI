const users = [
  {
    login: "acenelio",
    id: 1,
    imgUrl: "https://avatars.githubusercontent.com/u/13897257?v=4",
    url: "https://api.github.com/users/acenelio",
    name: "Nelio Alves",
    followers: 12422,
    location: "Brasil",
  },
  {
    login: "AYRESRIO",
    id: 2,
    imgUrl: "https://avatars.githubusercontent.com/u/83145818?v=4",
    url: "https://api.github.com/users/AYRESRIO",
    name: "Marcio D. Ayres",
    followers: 22000,
    location: "Brasil",
  },
];
export function findUsers(id: number) {
  return users.find((x) => x.id === id);
}
