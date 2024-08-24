export type Friend = {
  id: string;
  img: string;
  first_name: string;
  last_name: string;
  status: string;
  // avatarUrl: string;
  available: boolean;
  // isOnline: boolean;
};

export type FriendDetail = {
  id: number;
  img: string;
  first_name: string;
  last_name: string;
  phone: string;
  address_1: string;
  city: string;
  state: string;
  zipcode: string;
  bio: string;
  // avatarUrl: string;
  photos: string[];
  // status: string;
  statuses: string[];
  available: boolean;
};
