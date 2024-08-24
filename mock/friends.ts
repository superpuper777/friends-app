import { Friend, FriendDetail } from "@/types/friend";

const MockImages = [
  "https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid",
];

export const friends: Friend[] = [
  {
    id: "1",
    name: "Steph Walters",
    status: "At Work",
    isOnline: true,
    avatarUrl:
      "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?t=st=1724504077~exp=1724507677~hmac=d475fece27fa45993a86c8ba3da764f3791ad3f8ddf49810eb7430b5bd5dd327&w=740",
  },

  {
    id: "2",
    name: "Vlad Baratovich",
    status: "Hangout out by the pool",
    isOnline: true,
    avatarUrl:
      "https://img.freepik.com/free-photo/cute-spitz_144627-7076.jpg?t=st=1724504122~exp=1724507722~hmac=14a7d7baf276c75ad115086e0cd1cb295e808f1a274911caa3a0b0e0e9cb1cce&w=740",
  },
  {
    id: "3",
    name: "Reese Samsonite",
    status: "At NG-conf!",
    isOnline: false,
    avatarUrl:
      "https://img.freepik.com/premium-photo/dog-smile-dog-brown-white-color-background-white-color_1297251-5556.jpg?w=740",
  },
  {
    id: "4",
    name: "Edwardo Gonzalez",
    status: "Developing something amazing",
    isOnline: true,
    avatarUrl:
      "https://img.freepik.com/premium-photo/dog-with-brown-fur-coat-black-nose_1308157-175307.jpg?w=740",
  },
  {
    id: "5",
    name: "Jim Denison",
    status: "Designing beautiful things",
    isOnline: false,
    avatarUrl:
      "https://img.freepik.com/premium-photo/front-view-american-cocker-spaniel-puppy-sitting-isolated-white_191971-16610.jpg?w=826",
  },
];

export const friendDetail: FriendDetail = {
  id: 3,
  name: "dfdf",
  status: "string",
  bio: "string",
  phone: "564565",
  address: "sdsfsdfsd",
  city: "Minsk",
  state: "",
  zipcode: "2323",
  avatarUrl: MockImages[0],
  photos: MockImages,
  isOnline: true,
};
