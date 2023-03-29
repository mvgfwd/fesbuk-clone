import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Teman from "./Teman";

const teman = [
  { source: "https://links.papareact.com/r57", nama: "Bond, James Bond" },
  { source: "https://links.papareact.com/d0c", nama: "Expensive Petroleum" },
  { source: "https://links.papareact.com/zvy", nama: "Bill Gerbang" },
  { source: "https://links.papareact.com/kxk", nama: "Owner of Space" },
  { source: "https://links.papareact.com/snf", nama: "Information Holder" },
  { source: "https://links.papareact.com/6gg", nama: "In Peace" },
  { source: "https://links.papareact.com/f0p", nama: "Amazon" },
];

function Wijet() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex text-gray-600 items-center justify-between mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-3">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {teman.map((teman) => (
        <Teman key={teman.source} src={teman.source} name={teman.nama} />
      ))}
    </div>
  );
}

export default Wijet;
