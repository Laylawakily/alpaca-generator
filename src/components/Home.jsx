import { useState } from "react";
import ButtonGroup from "./ButtonGroup";

export default function Home() {
  const [hairStyle, setHairStyle] = useState("short");

  const changeHairStyle = (style) => {
    setHairStyle(style);
  };
  return (
    <div className=" flex w-full flex-col justify-center items-center h-screen">
      <div className="bg-purple-100 w-[700px] h-[400px]">
        <h1 className="text-4xl ml-16 font-bold my-6">ALPACA GENERATOR</h1>
        <div className="px-14 flex justify-between ">
          <div>
            <div
              style={{
                backgroundImage: `url(/images/backgrounds/darkblue70.png)`,
                width: "250px",
                height: "250px",
                position: "relative",
              }}
            >
              <img
                src="/images/neck/default.png"
                className="absolute top-0 left-0"
                alt="neck"
              />
              <img
                src="/images/leg/default.png"
                className="absolute top-0 left-0"
                alt="leg"
              />
              <img
                src="/images/nose.png"
                className="absolute -top-2 left-0"
                alt="nose"
              />
              <img
                src="/images/mouth/default.png"
                className="absolute -top-1 -rotate-3 left-0"
                alt="mouth"
              />
              <img
                src="/images/eyes/default.png"
                className="absolute z-0 -top-0 left-0"
                alt="eyes"
              />
              <img
                src={`/images/hair/${hairStyle}.png`}
                className="absolute w-56 z-50 top-2 left-4"
                alt="hair"
              />
              <img
                src="/images/ears/default.png"
                className="absolute top-0 left-0"
                alt="ears"
                width={300}
              />
              <img
                src="/images/accessories/headphone.png"
                className="absolute w-96 top-0 left-0 "
                alt="accessories"
              />
            </div>
            <div className="flex gap-4 mt-4 text-sm">
              <button className="bg-white text-black font-bold px-6 py-2">
                Random
              </button>
              <button className="bg-white text-black font-bold px-6 py-2">
                Download
              </button>
            </div>
          </div>

          <ButtonGroup changeHairStyle={changeHairStyle} />
        </div>
      </div>
    </div>
  );
}
