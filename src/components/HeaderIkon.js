import React from "react";

function HeaderIkon({ Ikon, Aktif }) {
  return (
    <div className="flex items-center md:px-10 sm:h-14 cursor-pointer hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <Ikon
        className={`h-5 text-gray-500 group-hover:text-blue-500 sm:h-7 mx-auto ${
          Aktif && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIkon;
