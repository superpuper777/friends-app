"use client";

import Avatar from "@/components/Avatar";
import IconButton from "@/components/IconButton";
import Status from "@/components/Status";
import StatusIndicator from "@/components/StatusIndicator";
import { friendDetail } from "@/mock/friends";
import goBackIcon from "@/public/images/arrow-back.svg";

type FriendPageProps = {
  params: { id: string | number };
};

const FriendPage = ({ params: { id } }: FriendPageProps) => {
  //   const friend = await fetchFriend(id);
  const handleBack = () => {
    console.log("go back");
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
          {friendDetail.avatarUrl && (
            <div className="relative">
              <Avatar
                image={friendDetail.avatarUrl}
                size={150}
                className="w-[150px] h-[150px] overflow-hidden rounded relative"
              />
              <StatusIndicator isOnline={friendDetail.isOnline} />
            </div>
          )}
          <div className="flex flex-col gap-[10px]">
            <h2 className="title">{friendDetail.name}</h2>
            <Status status={friendDetail.status} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendPage;
