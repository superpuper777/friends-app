import { fetchFriends } from "@/libs/fetcher";
import FriendItem from "./FriendItem";
import { friends } from "@/mock/friends";
import { Friend } from "@/types/friend";

const FriendsPage = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // let friends: Array<Friend> = [];
  // try {
  //   friends = await fetchFriends(`${apiUrl}/friends`);
  // } catch (error) {
  //   console.error("Error fetching friends:", error);
  //   return <div>Error fetching data</div>;
  // }

  // if (friends.length === 0) {
  //   return <div>No friends found</div>;
  // }
  // console.log(friends);
  return (
    <div className="bg-white bg-opacity-50 flex flex-col gap-[24px]">
      <h1 className="title text-main-gray px-10 pt-5">Friends</h1>
      <ul className="px-[40px] mb-[20px] flex flex-col gap-[14px]">
        {friends.map((friend) => (
          <li
            key={friend.id}
            className=" pl-[14px] pr-[24px] py-[14px] bg-white rounded-lg shadow-md"
          >
            <FriendItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsPage;
