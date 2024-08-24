import { friendDetail } from "@/mock/friends";
import Details from "./Details";

type FriendPageProps = {
  params: { id: string | number };
};

const FriendPage = async ({ params: { id } }: FriendPageProps) => {
  //   const friendDetails = await fetchFriend(id);
  return <Details friend={friendDetail} />;
};

export default FriendPage;
