import { friendDetail } from "@/mock/friends";
import Details from "./Details";
import { fetchFriend } from "@/libs/fetcher";
import { FriendDetail } from "@/types/friend";

type FriendPageProps = {
  params: { id: string | number };
};

const FriendPage = async ({ params: { id } }: FriendPageProps) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  //   const friendDetails = await fetchFriend(id);
  let friend: FriendDetail | null = null;
  try {
    friend = await fetchFriend(`${apiUrl}/friends/id`);
  } catch (error) {
    console.error("Error fetching friends:", error);
    return <div>Error fetching data</div>;
  }

  console.log(friend);
  return <Details friend={friendDetail} />;
};

export default FriendPage;
