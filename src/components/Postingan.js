import React from "react";
import { getFirestore, collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";

function Postingan() {
  const order = orderBy;
  const [snap, loading, err] = useCollection(
    query(collection(getFirestore(), "status"), order("timestamp", "desc")),
    {
      snapshotListenOptions: {
        includeMetadataChanges: true,
      },
    }
  );

  //buat nampilin snapdocs doang
  //konsolog
  console.log("snap", snap?.docs);

  return (
    <div>
      {snap && (
        <span className="m-4">
          <marquee direction="up" height="40px">
            <p className="text-blue-700">FacebooX (Clone Facebook)</p>
            <p>Made In: Tangerang</p>{" "}
            <p>
              Made by{" "}
              <span className="text-red-500 font-medium">
                Yonathan Simbolon
              </span>
            </p>
            <p className="text-sm">
              Logout: Click Your Profile Picture in Navbar
            </p>
          </marquee>
          {snap.docs.map((e) => (
            <Post
              key={e.id}
              name={e.data().name}
              status={e.data().status}
              // email={e.data().email}
              timestamp={e.data().timestamp}
              image={e.data().image}
              gambarOnStatus={e.data().gambarOnStatus}
            />
          ))}
        </span>
      )}
    </div>
  );
}

export default Postingan;
