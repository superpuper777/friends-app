import Details from "./Details";
import { fetchFriend } from "@/libs/fetcher";
import { FriendDetail } from "@/types/friend";

type FriendPageProps = {
  params: { id: string | number };
};

const FriendPage = async ({ params: { id } }: FriendPageProps) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  /*const friendDetails = await fetchFriend(id);
  this is how the query would look like using the id from the parameters*/
  let friend: FriendDetail | null = null;
  try {
    friend = await fetchFriend(`${apiUrl}/friends/id`);
  } catch (error) {
    console.error("Error fetching friends:", error);
    return <div>Error fetching data</div>;
  }
  return <Details friend={friend} />;
};

export default FriendPage;
