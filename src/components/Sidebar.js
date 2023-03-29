import { useSession } from "next-auth/react";
import React from "react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  DesktopComputerIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const session = useSession();
  let gambar = session;
  let namafb;
  if (gambar.status === "authenticated") {
    gambar = gambar.data.user?.image;
    namafb = session.data.user?.name;
  }
  console.log("sidebar", session);
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={gambar} title={namafb} />
      <SidebarRow Ikon={UserIcon} title="Teman" />
      <SidebarRow Ikon={UserGroupIcon} title="Grup" />
      <SidebarRow Ikon={ShoppingBagIcon} title="Pasar" />
      <SidebarRow Ikon={DesktopComputerIcon} title="Tonton" />
      <SidebarRow Ikon={CalendarIcon} title="Acara" />
      <SidebarRow Ikon={ClockIcon} title="Kenangan" />
      <SidebarRow Ikon={ChevronDownIcon} title="Selanjutnya" />
    </div>
  );
}

export default Sidebar;
