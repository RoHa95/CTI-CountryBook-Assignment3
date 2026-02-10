import React from "react";
import image from "../assets/nores.png";

function NoResultFound() {
  return (
    <div className="flex flex-col items-center w-full justify-center pb-6 text-2xl text-rose-500 font-bold">
        <p className="text-3xl my-4" >No Result Found !!!</p>
      <img src={image} alt="" />
    </div>
  );
}

export default NoResultFound;
