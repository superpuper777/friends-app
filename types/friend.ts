export type Friend = {
  id: string;
  name: string;
  status: string;
  avatarUrl: string;
  isOnline: boolean;
};

export type FriendDetail = {
  id: number;
  name: string;
  status: string;
  bio: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  avatarUrl: string;
  photos: string[];
  isOnline: boolean;
};
