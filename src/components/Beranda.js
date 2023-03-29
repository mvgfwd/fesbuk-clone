import React from "react";
import FBStory from "./FBStory";
import InputStatus from "./InputStatus";
import Postingan from "./Postingan";

function Beranda() {
  return (
    <div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto lg:mr-10 scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <FBStory />
        <InputStatus />
        <Postingan />
      </div>
    </div>
  );
}

export default Beranda;
