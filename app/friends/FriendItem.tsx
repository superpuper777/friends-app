"use client";

import { useRouter } from "next/navigation";
import Avatar from "@/components/Avatar";
import { Friend } from "@/types/friend";
import StatusIndicator from "@/components/StatusIndicator";
import Button from "@/components/Button";

interface FriendItemProps {
  friend: Friend;
}

const FriendItem = ({ friend }: FriendItemProps) => {
  const router = useRouter();
  const handleDetailsClick = () => {
    router.push(`/friends/${friend.id}`);
  };
  return (
    <div className="flex md:items-center xs:gap-[14px] md:justify-between md:flex-row xs:flex-col">
      <div className="flex items-center gap-[14px] relative">
        <Avatar
          image={friend.avatarUrl}
          size={60}
          className="w-[60px] h-[60px] overflow-hidden rounded relative"
        />
        <StatusIndicator isOnline={friend.isOnline} />
        <div className="flex flex-col gap-1">
          <span className="font-semibold">{friend.name}</span>
          <span className="subtitle border border-main-gray rounded-[20px] px-2 py-0.5 text-center inline-block max-w-max whitespace-nowrap">
            {friend.status}
          </span>
        </div>
      </div>

      <Button text="Details" onClick={handleDetailsClick} />
    </div>
  );
};

export default FriendItem;
