"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Avatar from "@/components/Avatar";
import IconButton from "@/components/IconButton";
import Status from "@/components/Status";
import StatusIndicator from "@/components/StatusIndicator";
import goBackIcon from "@/public/images/arrow-back.svg";
import { FriendDetail } from "@/types/friend";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InfoBlock from "./components/InfoBlock";

type DetailsProps = {
  friend: FriendDetail;
};
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const Details = ({ friend }: DetailsProps) => {
  const router = useRouter();
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
    <div className="flex items-start justify-center  gap-[80px]">
      <IconButton
        iconSrc={goBackIcon}
        iconAlt="Go back"
        onClick={handleBack}
        className="p-[10px] bg-white rounded-lg"
      />
      <div className="bg-white p-[60px] relative w-full">
        <div className="flex flex-col gap-[23px]">
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
          <TabList className="flex p-1">
            {["Info", "Photos"].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "px-[17.5px] py-2.5 text-sm leading-5 font-medium text-tab-gray",
                    selected
                      ? "border-b-2 border-txt-black text-txt-black outline-none"
                      : "hover:text-main-gray"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-2">
            <TabPanel className="p-[28px] bg-white rounded-lg shadow">
              <InfoBlock
                key={0}
                label={info[0].label}
                value={info[0].value}
                type="bio"
              />
              <InfoBlock
                key={1}
                label={info[1].label}
                value={info[1].value}
                type="phone"
              />
              {info.slice(2).map((item, index) => (
                <InfoBlock
                  key={index}
                  label={item.label}
                  value={item.value}
                  type="default"
                />
              ))}
            </TabPanel>
            <TabPanel className="p-[20px] bg-white rounded-lg shadow">
              <div className="grid grid-cols-3 gap-5">
                {friend.photos.map((photo, idx) => (
                  <Image
                    width={136}
                    height={136}
                    key={idx}
                    src={photo}
                    alt={`Friend photo ${idx + 1}`}
                    className="object-cover h-32 rounded"
                  />
                ))}
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default Details;
