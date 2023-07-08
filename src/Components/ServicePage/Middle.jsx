import React from "react";

const Middle = ({heading, source, weight, cost, description}) => {
  return (
    <div className="text-center my-20">
      <div className="text-indigo-800 text-2xl py-5">
        <h1>{heading}</h1>
      </div>
      <div className="p-5 md:p-0 flex flex-col md:flex-row justify-between items-center bg-white rounded-xl w-[400px] md:w-[600px] md:w-[700px] lg:w-[1000px] m-auto">
        <div>
          <img
            src={source}
            alt="alt"
            className="w-[300px] h-[210px] rounded-tl-md rounded-bl-md"
          />
        </div>
        <div className="w-[400px] md:w-[650px] p-5 text-start">
          <div className="text-sm">{weight}</div>

          <div className="my-2 flex items-center">
            <div className="mr-3 text-md">Starting from</div>
            <div className="text-lg font-bold">{cost}</div>
          </div>
          <div className="text-sm text-gray-600">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
