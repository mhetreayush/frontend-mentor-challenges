import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import fs from "fs";
import path from "path";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const Home = ({ challenges }) => {
  return (
    <>
      <Head>
        <title>Challenges - Ayush Mhetre</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center p-2 sticky top-0   bg-gray-600 w-full text-white text-2xl font-semibold  mb-4">
        Challenges
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {challenges?.map((challenge, idx) => {
          return (
            <Link
              href={`challenges/${challenge}`}
              passHref
              key={idx}
              className="my-4 container max-w-[300px] mx-auto"
            >
              <div className="rounded-md mx-4  bg-gray-600 h-full p-2 text-white z-0 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center ">
                <Image
                  src={require(`./challenges/${challenge}/desktop-design.jpg`)}
                  className="rounded-md  border-2 p-1 border-white object-contain"
                  height={300}
                  width={300}
                  alt={`${challenge}`}
                />
                <h1 className="first-letter:uppercase text-center font-semibold my-2">
                  {challenge.replace(/-/g, " ")}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const challenges = fs.readdirSync(path.join("src", "pages", "challenges"));
  return {
    props: {
      challenges,
    },
  };
};

export default Home;
