import Avatar from "@/components/Avatar";
import { Friend } from "./page";

interface FriendItemProps {
  friend: Friend;
}
const FriendItem = ({ friend }: FriendItemProps) => {
  return (
    <div className="flex items-center gap-[14px]">
      <Avatar
        image={friend.avatarUrl}
        size={60}
        className="w-[60px] h-[60px] overflow-hidden rounded"
      />
      <div className="flex flex-col gap-1">
        <span className="font-semibold">{friend.name}</span>
        <span className="subtitle border border-main-gray rounded-[20px] px-2 py-0.5 text-center inline-block max-w-max whitespace-nowrap">
          {friend.status}
        </span>
      </div>
    </div>
  );
};

export default FriendItem;
