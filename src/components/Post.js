import React from "react";
import Image from "next/image";
import {
  ThumbUpIcon,
  ShareIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

function Post(props) {
  const [suka, setSuka] = useState(false);
  const [komentar, setKomentar] = useState(false);

  const toggleSuka = () => {
    return setSuka((prev) => !prev);
  };

  const toggleKomentar = () => {
    return setKomentar((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-md">
        <div className="flex items-center space-x-2">
          <img
            src={props.image}
            alt="Gambar"
            width={40}
            height={40}
            className="rounded-full animat"
          />
          <div>
            <p className="text-red-500 animate-bounce flex whitespace-nowrap">
              {props.name}{" "}
              <CheckCircleIcon className="text-blue-500 animate-bounce hover:animate-spin" />
            </p>

            <p className="text-green-400 text-xs">
              {props.timestamp.toDate().toLocaleString()}
              {/* {new Date(props.timestamp?.toDate()).toLocaleString()} */}
            </p>
          </div>
        </div>
        <div>
          <p className="pt-4">{props.status}</p>
        </div>
      </div>
      {props.gambarOnStatus && (
        <div className="relative h-56 md:h-96">
          <Image
            src={props.gambarOnStatus}
            objectFit="cover"
            layout="fill"
            alt="Picture on Status"
          />
        </div>
      )}
      {suka && (
        <marquee bgcolor="#49849e" direction="right" className="text-white ">
          Anda menyukai ini
        </marquee>
      )}
      <div className="flex bg-white items-center justify-between text-gray-500 border-t shadow-md rounded-b-2xl">
        <div
          className={`inputIkon rounded-none rounded-bl-2 ${
            suka ? `text-blue-600` : ``
          }`}
          onClick={toggleSuka}
        >
          <ThumbUpIcon className="h-4" />
          <p>Sukak</p>
        </div>
        <div
          className={`inputIkon rounded-none ${komentar ? `text-red-600` : ``}`}
          onClick={toggleKomentar}
        >
          <TrashIcon className="h-4" />
          <p>Komentarin</p>
        </div>
        <div className="inputIkon rounded-none rounded-br-2">
          <ShareIcon className="h-4" />
          <p>Bagikan</p>
        </div>
      </div>
      {komentar && (
        <div className="bg-slate-500 rounded-md shadow-sm">
          <marquee
            direction="down"
            width="100%"
            height="150"
            behavior="alternate"
          >
            <marquee behavior="alternate" className="text-white">
              Yah, Section ini masih dalam tahap Pengembangan
            </marquee>
          </marquee>
        </div>
      )}
    </div>
  );
}

export default Post;
