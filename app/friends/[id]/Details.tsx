"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";

import Avatar from "@/components/Avatar";
import IconButton from "@/components/IconButton";
import Status from "@/components/Status";
import StatusIndicator from "@/components/StatusIndicator";

import PhotosTabPanel from "./components/PhotosTabPanel";
import InfoTabPanel from "./components/InfoTabPanel";
import TabNavigation from "./components/TabNavigation";
import goBackIcon from "@/public/images/arrow-back.svg";
import { FriendDetail } from "@/types/friend";

type DetailsProps = {
  friend: FriendDetail;
};

const Details = ({ friend }: DetailsProps) => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (image: string) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const handleBack = () => {
    router.back();
  };
  const info = [
    { label: "Bio", value: friend.bio },
    { label: "Phone", value: friend.phone },
    { label: "Address", value: friend.address_1 },
    { label: "City", value: friend.city },
    { label: "State", value: friend.state },
    { label: "Zipcode", value: friend.zipcode },
  ];

  return (
    <div className="relative flex items-start justify-center sm:gap-[5px] lg:gap-[20px] xl:gap-[80px]">
      <IconButton
        iconSrc={goBackIcon}
        iconAlt="Go back"
        onClick={handleBack}
        className="p-[10px] bg-white rounded-lg xs:absolute sm:static left-1 top-4 z-10"
      />
      <div className="bg-white xl:p-[60px] sm:px-[15px] xs:py-[25px] lg:p-[30px] relative w-full">
        <div className="flex md:items-start flex-col gap-[23px] xs:items-center">
          {friend.img && (
            <div className="relative">
              <Avatar
                image={friend.img}
                size={150}
                className="w-[150px] h-[150px] object-cover"
              />
              <StatusIndicator available={friend.available} />
            </div>
          )}
          <div className="flex flex-col gap-[10px]">
            <h2 className="title">
              {friend.first_name} {friend.last_name}
            </h2>
            <Status status={friend.statuses[0]} />
          </div>
        </div>
        <TabGroup as="div" className="mt-[30px]">
          <TabNavigation tabs={["Info", "Photos"]} onTabChange={() => {}} />
          <TabPanels className="mt-2">
            <TabPanel className="p-[28px] bg-white rounded-lg shadow">
              <InfoTabPanel info={info} />
            </TabPanel>
            <TabPanel>
              <PhotosTabPanel
                photos={friend.photos}
                openImage={openImage}
                selectedImage={selectedImage}
                closeImage={closeImage}
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default Details;
