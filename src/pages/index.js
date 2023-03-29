import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Login from "@/components/Login";
import { getSession, useSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import Beranda from "@/components/Beranda";
import Wijet from "../components/Wijet";

const inter = Inter({ subsets: ["latin"] });

function Home(props) {
  if (!props.user) {
    console.log("nosession", props.session);
    return <Login />;
  }
  return (
    <div className=" bg-gray-100">
      <Head>
        <title>Faceboox Clone</title>
      </Head>
      {/* <h1>Header debug</h1> */}
      <Header />

      <main className="flex">
        <Sidebar />
        <Beranda />
        <Wijet />
      </main>
    </div>
  );
}
export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }
  console.log("serversidex", session);
  const { user } = session;
  console.log("usersess", user);
  console.log("contextsess", context);
  return {
    props: {
      user,
    },
  };
}
