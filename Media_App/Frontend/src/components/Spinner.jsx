import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-5">
      <Circles color="#00BFFF" width={200} height={50} />
      <p className="text-lg text-center px-2 mt-1">{message}</p>
    </div>
  );
};

export default Spinner;
