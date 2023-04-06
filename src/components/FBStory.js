import React from "react";
import StoryElement from "./StoryElement";

const stori = [
  {
    nama: "Lalisa Manoban",
    src: "https://wallpaperaccess.com/full/1100559.jpg",
    profile: "https://links.papareact.com/kxk",
  },
  {
    nama: "Puan Maharanee",
    src: "https://links.papareact.com/snf",
    profile: "https://links.papareact.com/xql",
  },
  {
    nama: "Michele Obama",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy   ",
  },
  {
    nama: "Lionel Messi",
    profile: "https://links.papareact.com/4u4",
    src: "https://images.news18.com/ibnlive/uploads/2022/12/lionel-messi.jpg",
  },
  {
    nama: "Mark Sukebeg",
    profile: "https://links.papareact.com/snf",
    src: "https://links.papareact.com/xql",
  },
];

function FBStory() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stori.map((e) => (
        <StoryElement
          key={e.src}
          nama={e.nama}
          src={e.src}
          profile={e.profile}
        />
      ))}
    </div>
  );
}

export default FBStory;
