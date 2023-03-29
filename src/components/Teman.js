import Image from "next/legacy/image";
import React from "react";

function Teman(props) {
  return (
    <div className="flex items-center space-x-3 mb-2 hover:bg-gray-200 cursor-pointer rounded-xl relative">
      <Image
        src={props.src}
        layout="fixed"
        objectFit="cover"
        // style={{ layout: "fixed", objectFit: "cover" }}
        className="rounded-full"
        width={50}
        height={50}
        alt="teman"
      />
      <p>{props.name}</p>
      <div className="w-3 h-3 absolute bg-green-500 left-7 top-8 rounded-full animate-bounce"></div>
    </div>
  );
}

export default Teman;
