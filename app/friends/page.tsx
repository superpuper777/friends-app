import FriendItem from "./FriendItem";
import { friends } from "@/mock/friends";

const FriendsPage = () => {
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
