import { Tab, TabList } from "@headlessui/react";
import classNames from "classnames";

type TabNavigationProps = {
  tabs: string[];
  onTabChange: (tab: string) => void;
};

const TabNavigation = ({ tabs, onTabChange }: TabNavigationProps) => {
  return (
    <TabList className="flex p-1">
      {tabs.map((tab) => (
        <Tab
          key={tab}
          onClick={() => onTabChange(tab)}
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
  );
};

export default TabNavigation;
