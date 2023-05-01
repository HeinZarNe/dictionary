import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Display from "./Display";
import Description from "./Description";
import Error from "./Error";
import Load from "./Load";

const Container = () => {
  const [word, setWord] = useState("");
  const [list, setList] = useState([]);
  const [err, setErr] = useState(false);
  const [load, setLoad] = useState(false);

  const handleOnSearch = async () => {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const json = await res.json();
    setLoad(false);
    if (res.status === 404) {
      setErr(true);
      setList(json);
      return;
    } else {
      setErr(false);
      setList(json);
    }
  };

  useEffect(
    (_) => {
      if (word.length !== 0) {
        setLoad(true);
        handleOnSearch();
      }
    },
    [word]
  );

  return (
    <div className=" container bg-white dark:bg-black max-w-4xl  my-0 mx-auto py-5 sm:py-10 sm:px-20 px-5">
      <Navbar />
      <SearchBar onSearch={setWord} />
      {load ? (
        <div className=" h-[50vh] flex justify-center items-center">
          <Load />
        </div>
      ) : err ? (
        <Error list={list} />
      ) : list.length === 0 ? (
        <p className="mt-5 text-stone-500 text-center">
          Please enter a word to search for.
        </p>
      ) : (
        <>
          <Display list={list} />
          {list[0].meanings.map((item, i) => (
            <Description item={item} key={i} />
          ))}
        </>
      )}
    </div>
  );
};

export default Container;
