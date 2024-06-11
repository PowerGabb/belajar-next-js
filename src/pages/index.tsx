import Navbar from "@/components/layouts/navbar";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        Hello Rangga
      </div>
    </div>
  );
}
