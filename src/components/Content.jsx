import React from "react";
import Card from "./Card";
import { Circles } from "react-loader-spinner";
import NoResultFound from "./NoResultFound";

function Content({ data, loading, notfound }) {
  return (
    <div className="max-w-4xl mx-auto p-2">
      <div>
        {loading ? (
          <div className="w-full flex items-center justify-center my-10">
            <Circles color="#FF637E" />
          </div>
        ) : notfound ? (
          <NoResultFound />
        ) : (
          <div className="border pt-6 md:px-8 mt-6 border-rose-500 rounded-2xl md:grid auto-rows-fr md:grid-cols-3 md:gap-x-6">
            {data.map((item) => (
              <Card key={item.id} data={item}>
                {item.name.common}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
