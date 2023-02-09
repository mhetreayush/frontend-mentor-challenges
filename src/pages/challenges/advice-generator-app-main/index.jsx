import axios from "axios";
import Image from "next/image";
import { useState } from "react";
// import { Dice } from "./icon-dice.svg";
const Challenge = ({ advice, adviceNo }) => {
  const [adviceObject, setAdviceObject] = useState({
    advice,
    adviceNo,
  });

  const getNewAdvice = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    setAdviceObject({
      advice: res.data.slip.advice,
      adviceNo: res.data.slip.id,
    });
  };

  return (
    <div className="h-screen  w-screen flex flex-col gap-y-4 items-center justify-center bg-slate-700">
      <div className="rounded-lg p-4 flex flex-col gap-y-4 text-center sm:max-w-[30vw] mx-4 bg-slate-500 relative pb-14">
        <h3 className="text-green-500 text-sm tracking-tighter">
          A D V I C E # {adviceObject.adviceNo}
        </h3>
        <h1 className="text-gray-100 text-xl">
          &rdquo;{adviceObject.advice}&ldquo;
        </h1>
        <div className="my-3">
          <Image
            className="hidden sm:inline-block"
            src={require("./pattern-divider-desktop.svg")}
            alt="divider"
          />
          <Image
            className="sm:hidden"
            src={require("./pattern-divider-mobile.svg")}
            alt="divider"
          />
        </div>
        <div className="w-fit self-center flex justify-center group -mb-20 mt-3 relative items-center  ">
          <div className="opacity-0 group-hover:opacity-100 absolute bg-green-500 rounded-full blur-lg h-16 w-16 transition-all duration-300 "></div>
          <button
            onClick={getNewAdvice}
            className=" rounded-full bg-green-400 z-0 p-4 group-hover:scale-110 transition-all duration-300"
          >
            <Image
              src={require("./icon-dice.svg")}
              height={16}
              width={16}
              alt="dice"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Challenge;

export async function getServerSideProps() {
  const res = await axios.get("https://api.adviceslip.com/advice");

  return {
    props: {
      adviceNo: res.data.slip.id,
      advice: res.data.slip.advice,
    },
  };
}
