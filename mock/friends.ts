import { Friend, FriendDetail } from "@/types/friend";

const MockImages = [
  "https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg?t=st=1724538268~exp=1724541868~hmac=be2d60a0a9c57a9b0424386e81e71b27f658df83e99aff8eb1c48be8c6e00478",
  "https://img.freepik.com/premium-photo/close-up-portrait-cat_1048944-20352133.jpg",
  "https://img.freepik.com/free-photo/adorable-black-white-kitty-with-monochrome-wall-her_23-2148955182.jpg?t=st=1724538362~exp=1724541962~hmac=eb5dd28263138a23bdd001421c2346b27c14a80906489db10b47a9e81fe37343",
  "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-her_23-2148955134.jpg?t=st=1724538694~exp=1724542294~hmac=c43de1d78216293d9afc74bbfc5cd977f04548efd6f5a519010d6166545fce18",
];

export const friends: Friend[] = [
  {
    id: "1",
    first_name: "Steph",
    last_name: "Walters",
    status: "At Work",
    available: true,
    img: "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?t=st=1724504077~exp=1724507677~hmac=d475fece27fa45993a86c8ba3da764f3791ad3f8ddf49810eb7430b5bd5dd327&w=740",
  },

  {
    id: "2",
    first_name: "Vlad",
    last_name: "Baratovich",
    status: "Hangout out by the pool",
    available: true,
    img: "https://img.freepik.com/free-photo/cute-spitz_144627-7076.jpg?t=st=1724504122~exp=1724507722~hmac=14a7d7baf276c75ad115086e0cd1cb295e808f1a274911caa3a0b0e0e9cb1cce&w=740",
  },
  {
    id: "3",
    first_name: "Reese",
    last_name: "Samsonite",
    status: "At NG-conf!",
    available: false,
    img: "https://img.freepik.com/premium-photo/dog-smile-dog-brown-white-color-background-white-color_1297251-5556.jpg?w=740",
  },
  {
    id: "4",
    first_name: "Edwardo",
    last_name: "Gonzalez",
    status: "Developing something amazing",
    available: true,
    img: "https://img.freepik.com/premium-photo/dog-with-brown-fur-coat-black-nose_1308157-175307.jpg?w=740",
  },
  {
    id: "5",
    first_name: "Jim",
    last_name: "Denison",
    status: "Designing beautiful things",
    available: false,
    img: "https://img.freepik.com/premium-photo/front-view-american-cocker-spaniel-puppy-sitting-isolated-white_191971-16610.jpg?w=826",
  },
];

export const friendDetail: FriendDetail = {
  id: 3,
  first_name: "Reese",
  last_name: "Samsonite",
  statuses: ["At Work"],
  bio: "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
  phone: "(820) 289-1818",
  address_1: "5190 Center Court Drive",
  city: "Spring",
  state: "TX",
  zipcode: "77370",
  img: MockImages[0],
  photos: MockImages,
  available: true,
};
