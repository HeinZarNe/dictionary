import React from "react";

const Description = ({ item }) => {
  return (
    <div className="flex flex-col items-start pb-5">
      <div className="flex flex-row justify-center items-center w-full gap-3 pb-5">
        <span className="font-bold dark:text-neutral-200">
          {item.partOfSpeech}
        </span>
        <div className=" w-full h-[1px] bg-stone-400"></div>
      </div>
      <div className=" text-stone-600 gap-2 flex flex-col">
        <span className="dark:text-neutral-500">Meaning</span>
        <div>
          {item.definitions.map((item, i) => (
            <div key={i}>
              <div className="flex dark:text-white text-stone-900  flex-row items-start pb-3">
                <li></li>
                <div className="flex flex-col gap-1">
                  <span>{item.definition}</span>
                  {item.example && (
                    <span className=" dark:text-neutral-400 text-stone-600">
                      "{item.example}"
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div>
            <span className="pe-5 dark:text-neutral-400">Synonyms:</span>
            <div className="flex flex-row flex-wrap">
              {item.synonyms.map((s, i) => (
                <span className="text-purple-600 font-bold pe-2" key={i}>
                  {s},
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="pe-5 dark:text-neutral-400">Antonyms:</span>
            <span className="text-purple-600 font-bold">
              {item.antonyms.map((s, i) => (
                <span className="text-purple-600 font-bold pe-2" key={i}>
                  {s},
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
