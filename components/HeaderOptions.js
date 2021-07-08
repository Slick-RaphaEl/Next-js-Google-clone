import HeaderOptionSingle from "./HeaderOptionSingle";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PlayIcon,
  PhotographIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      <div className="flex space-x-6">
        <HeaderOptionSingle Icon={SearchIcon} title="All" selected/>
        <HeaderOptionSingle Icon={PhotographIcon} title="Images" />
        <HeaderOptionSingle Icon={PlayIcon} title="Videos" />
        <HeaderOptionSingle Icon={NewspaperIcon} title="News" />
        <HeaderOptionSingle Icon={MapIcon} title="Maps" />
        <HeaderOptionSingle Icon={DotsVerticalIcon} title="More" />
      </div>

      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
