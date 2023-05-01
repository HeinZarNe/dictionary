import React from "react";
import { IconContext } from "react-icons";
import { BsFillPlayFill } from "react-icons/bs";
const Display = ({ list }) => {
  const song = new Audio();
  const audio =
    list[0].phonetics.find((phonetic) => phonetic.audio != "") || null;
  song.src = (audio && audio.audio) || null;
  const playSong = (_) => {
    song.src !== null && song.play();
  };

  return (
    <div className="flex flex-row justify-between items-center pb-5">
      <div className="flex flex-col justify-center items-start">
        <span className="font-extrabold dark:text-white text-3xl sm:text-4xl">
          {list[0].word}
        </span>
        <span className=" text-purple-600 text-base">/{list[0].phonetic}/</span>
      </div>
      <div
        className=" bg-purple-300 hover:bg-purple-200
         active:bg-purple-4S00
        p-1 rounded-[50%]"
        onClick={playSong}
      >
        <IconContext.Provider
          value={{
            size: "2rem",
            style: { color: "#9333ea", marginLeft: "3px" },
          }}
        >
          <BsFillPlayFill />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Display;
