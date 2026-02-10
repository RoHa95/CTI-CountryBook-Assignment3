import React from "react";

function Card({ data }) {

  // const [languageA, language] = Object.entries(data.languages)[0];
const [languageA, language] =
  Object.entries(data.languages ?? {})[0] ?? [];

  // console.log(data);
  // console.log(data.languages);
  // Object.entries(data.languages).map(([key, value]) => console.log(value));
  return (
    <div className="flex flex-col border rounded-2xl shadow-2xl mb-8 flex-1 overflow-hidden mx-4 md:mx-0 hover:bg-rose-50 cursor-pointer">
      <img
        className="w-full h-57.5 object-cover border-b"
        src={data.flags.png}
        alt="flag"
      />
      <div className="px-1 py-3 md:p-3 flex flex-col h-full flex-1 mx-10 md:mx-2 mb-6">
        <div>
          <span className="text-5xl md:text-3xl font-bold">
            {data.name.common}
          </span>
          <div className="font-bold text-2xl md:text-lg mt-2">
            Capital : <span className="text-rose-500">{data.capital}</span>
          </div>
        </div>

        <div className="flex gap-x-2 md:flex-col md:items-start items-center mt-auto justify-between">
          <div className="font-bold mt-2 bg-rose-200 px-4 pb-0.5 rounded-xl">
            Region : <span className="text-rose-500">{data.region}</span>
          </div>
          <div className="font-bold mt-2 bg-rose-200 px-4 pb-0.5 rounded-xl">
            languages :{" "}
              <span className="text-rose-500">{language}</span>
          </div>
          <div className="font-bold md:text-sm md:py-1 mt-2 bg-rose-200 px-4 pb-0.5 rounded-xl">
            Population :{" "}
            <span className="text-rose-500">{data.population}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
