import Image from "next/image";

const Challenge = () => {
  return (
    <div className="h-screen  w-screen flex flex-col gap-y-4 items-center justify-center bg-blue-100">
      <div className="rounded-lg p-4 flex flex-col pb-10 gap-y-3  bg-white text-center w-56 items-center mx-10">
        <Image
          src={require("./image-qr-code.png")}
          className="rounded-lg w-52 h-52"
          fill={false}
          alt="challenge-image"
        />
        <h1 className="font-bold text-base">
          Improve your front-end skills by building projects
        </h1>
        <h3 className=" text-gray-400">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h3>
      </div>
    </div>
  );
};

export default Challenge;
