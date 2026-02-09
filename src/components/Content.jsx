import React from "react";
import Card from "./Card";

function Content({ data }) {

console.log(data);

  return (
    <div className="max-w-4xl mx-auto p-2">
      <div className="border pt-6 md:px-8 mt-6 border-rose-500 rounded-2xl md:grid auto-rows-fr md:grid-cols-3 md:gap-x-6">
        {
            data.map(item=>(<Card data={item}>{item.name.common}</Card>))
        }
      </div>
    </div>
  );
}

export default Content;
