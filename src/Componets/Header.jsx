import h from "./../assets/Images/h.jpg";
import avatar from "./../assets/Images/avatar.png";
import HeaderItem from "./HeaderItem";
import getTrendingVideos from "./../Services/GlobalApi"
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
console.log(await getTrendingVideos);

function Header() {
  const [toggle, setToggle] = useState(false)
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
   
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img src={h} className="w-[80px] md:w-[115px] bg-black object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5" onClick={()=>setToggle(!toggle)}>
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.name} name={""} Icon={item.icon} />
              )
          )}
          <div className="md:hidden">
            <HeaderItem name={""} Icon={HiDotsVertical} />
            { toggle?<div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
            {menu.map(
            (item, index) =>
              index > 3 && (
                <HeaderItem key={item.icon} name={item.name} Icon={item.icon} />
                
              )
          )}
            </div> :null}
          </div>
        </div>
      </div>
      <img src={avatar} className="w-[48px] rounded-full" />
    </div>
  );
}

export default Header;
