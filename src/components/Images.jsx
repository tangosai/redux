import React from "react";
import { useSelector } from "react-redux";

export const Images = () => {
  const { images } = useSelector((response) => response);
  return (
    <div className="bg-amber-50 min-h-screen ">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="grid grid-cols-4 gap-5 pt-5">
          {images.map((item, index) => {
            return (
              <img src={item} width="480" className="w-full" key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
