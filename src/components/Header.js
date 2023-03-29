import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  HomeIcon,
  ChevronDownIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  SearchIcon,
  PlayIcon,
  FlagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIkon from "./HeaderIkon";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const session = useSession();
  console.log("header ses", session);
  let gambar = session;
  let namafb;
  if (gambar.status === "authenticated") {
    gambar = gambar.data.user?.image;
    namafb = session.data.user?.name;
  }

  console.log("namafb", session);
  return (
    <div className="flex items-center sticky top-0 z-50 bg-white shadow-md p-2 lg:px-5">
      <div className="flex items-center">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
          width={40}
          height={40}
        />
        <div className="flex ml-2 bg-gray-100 p-2 rounded-full">
          <SearchIcon className="h-6 text-gray-500" />
          <input
            className="hidden md:inline-flex bg-transparent flex-shrink items-center outline-none placeholder-gray-500 ml-2"
            type="text"
            placeholder="search on Faceboox"
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIkon Aktif Ikon={HomeIcon} />
          <HeaderIkon Ikon={FlagIcon} />
          <HeaderIkon Ikon={PlayIcon} />
          <HeaderIkon Ikon={ShoppingCartIcon} />
          <HeaderIkon Ikon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex justify-end sm:space-x-2 items-center">
        <Image
          onClick={signOut}
          src={gambar}
          width={40}
          height={40}
          className="rounded-full"
          alt="asd"
        />
        <p className="pr-3 font-semibold whitespace-nowrap">{namafb}</p>
        <ViewGridIcon className="ikon" />
        <ChatIcon className="ikon" />
        <BellIcon className="ikon" />
        <ChevronDownIcon className="ikon" />
      </div>
    </div>
  );
}

export default Header;
