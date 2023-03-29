import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import {
  VideoCameraIcon,
  EmojiHappyIcon,
  CameraIcon,
} from "@heroicons/react/solid";
import { db, simpanan } from "../../firebase";
import { useRef, useState } from "react";
import firebase from "firebase/compat/app";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

function InputStatus() {
  const statuss = useRef();
  const imgStatus = useRef();
  const [postGambar, setPostGambar] = useState();

  const session = useSession();
  let gambar = session;
  let namafb;
  if (gambar.status === "authenticated") {
    gambar = gambar.data?.user?.image;
    namafb = session.data.user.name;
  }

  const dok = doc;
  const getURL = getDownloadURL;
  const setDok = setDoc;

  const submitForm = (e) => {
    e.preventDefault();
    if (!statuss.current.value) return;

    db.collection("status")
      .add({
        status: statuss.current.value,
        name: session.data.user.name,
        email: session.data?.user?.email,
        image: session.data.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        //mau upload gambar (if ada)
        if (postGambar) {
          console.log("doc=", doc);
          const refer = ref(simpanan, `status/${doc.id}`);
          uploadString(refer, postGambar, "data_url").then(async (snapshot) => {
            //Mengambil URL utk store ke collection status jika ada gambar
            const statusCollection = dok(db, "status", doc.id);
            const urlGambar = await getURL(refer);
            setDok(
              statusCollection,
              { gambarOnStatus: urlGambar },
              { merge: true }
            );
            console.log("UPLOADED SNAPSHOT = ", snapshot);
          });
        }
      });
    statuss.current.value = "";
    setPostGambar(null);
  };

  const addImg = (e) => {
    //pembaca
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      console.log("readasdataurl", e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setPostGambar(readerEvent.target.result);
    };
  };

  const rmvImg = () => {
    setPostGambar(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex p-4 space-x-4 items-center">
        <Image
          className="rounded-full"
          src={gambar}
          width={40}
          height={40}
          style={{ layout: "fixed" }}
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow focus:outline-none px-5"
            placeholder={`Apa yang anda pikirkan yang mulia ${namafb}?`}
            type="text"
            ref={statuss}
          />
          <button hidden onClick={submitForm}>
            Submit
          </button>
        </form>

        {postGambar && (
          <div
            onClick={rmvImg}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              src={postGambar}
              alt="Your Image"
              className="h-10 object-contain"
            />
          </div>
        )}
      </div>

      <div className="flex justify-evenly">
        <div className="inputIkon">
          <VideoCameraIcon className="h-7 text-blue-500 " />
          <p className="text-xs md:text-sm lg:text-base">Streaming Disini</p>
        </div>
        <div onClick={() => imgStatus.current.click()} className="inputIkon">
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs md:text-sm lg:text-base">Upload Foto</p>
          <input hidden onChange={addImg} ref={imgStatus} type="file" />
        </div>
        <div className="inputIkon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs md:text-sm lg:text-base">Perasaan Kamu</p>
        </div>
      </div>
    </div>
  );
}

export default InputStatus;
