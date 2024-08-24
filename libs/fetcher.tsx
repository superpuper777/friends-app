import { Friend, FriendDetail } from "@/types/friend";
import axios from "axios";

export const fetchFriends = async (url: string): Promise<Array<Friend>> => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Data reception error");
    } else {
      throw new Error("Data reception error");
    }
  }
};

export const fetchFriend = async (url: string): Promise<FriendDetail> => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Data reception error");
    } else {
      throw new Error("Data reception error");
    }
  }
};
