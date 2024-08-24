"use client";

import Avatar from "@/components/Avatar";
import IconButton from "@/components/IconButton";
import Status from "@/components/Status";
import StatusIndicator from "@/components/StatusIndicator";
import goBackIcon from "@/public/images/arrow-back.svg";
import { FriendDetail } from "@/types/friend";
import { useRouter } from "next/navigation";

type DetailsProps = {
  friend: FriendDetail;
};

const Details = ({ friend }: DetailsProps) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="flex items-start justify-center  gap-[80px]">
      <IconButton
        iconSrc={goBackIcon}
        iconAlt="Go back"
        onClick={handleBack}
        className="p-[10px] bg-white rounded-lg"
      />
      <div className="bg-white p-[60px] relative w-full">
        <div className="flex flex-col gap-[23px]">
          {friend.avatarUrl && (
            <div className="relative">
              <Avatar
                image={friend.avatarUrl}
                size={150}
                className="w-[150px] h-[150px] overflow-hidden rounded relative"
              />
              <StatusIndicator isOnline={friend.isOnline} />
            </div>
          )}
          <div className="flex flex-col gap-[10px]">
            <h2 className="title">{friend.name}</h2>
            <Status status={friend.status} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
