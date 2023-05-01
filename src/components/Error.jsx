import React from "react";

const Error = ({ list }) => {
  return (
    <div className="dark:bg-black text-center dark:text-white p-4 rounded-md">
      <h2 className="text-xl font-bold mb-2">{list.title}</h2>
      <p className="mb-4">{list.message}</p>
      <p className="font-medium">{list.resolution}</p>
    </div>
  );
};

export default Error;
