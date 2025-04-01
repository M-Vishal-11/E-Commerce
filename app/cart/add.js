"use client";
import Image from "next/image";
import { useState } from "react";

export const Add = () => {
  const [totQnty, add1] = useState(1);

  const handleAdd = () => {
    add1((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (totQnty > 1) {
      add1((prev) => prev - 1);
    }
  };

  return (
    <div className="border-2 rounded-4xl w-40 h-10 flex flex-row justify-between items-center">
      {totQnty === 1 ? (
        <Image
          src="/assets/bin.png"
          width={50}
          height={50}
          alt="Bin"
          className="cursor-pointer"
          onClick={handleMinus}
        />
      ) : (
        <Image
          src="/assets/minus.svg"
          width={40}
          height={40}
          alt="Minus"
          className="cursor-pointer ml-1"
          onClick={handleMinus}
        />
      )}

      <h1 className="w-10 text-center text-2xl pr-1.5">{totQnty}</h1>

      <Image
        src="/assets/plus.png"
        width={35}
        height={35}
        alt="Add"
        className="cursor-pointer"
        onClick={handleAdd}
      />
    </div>
  );
};
