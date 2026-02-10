import React from "react";

function ErrorPage() {
  return (
    <div className="w-full border rounded-2xl flex flex-col items-center justify-center border-rose-500 mx-auto min-h-screen">
      <p className="text-5xl italic font-bold text-rose-600 my-5">
        Error in Server
      </p>
      <div
        onClick={() => console.log("hi")}
        className="bg-rose-500 px-4 py-1 text-2xl cursor-pointer hover:bg-white hover:border hover:border-rose-500 hover:text-rose-500 text-white "
      >
        <a href="/">Retry</a>
      </div>
    </div>
  );
}

export default ErrorPage;
