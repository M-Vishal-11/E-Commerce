"use client";
import Card from "../Card.jsx";

import { useState } from "react";

function CatDrop() {
  return (
    <div className="w-full max-w-full mx-auto mt-10">
      <div className="border-b max-w-full border-gray-300">
        <input type="checkbox" id="section1" className="hidden peer" />
        <label
          htmlFor="section1"
          className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-black hover:text-gray-100 peer-checked:bg-black peer-checked:text-gray-100 block cursor-pointer"
        >
          Section 1
        </label>
        <div className=" ml-auto mr-auto max-w-[1200px] max-h-0 overflow-hidden opacity-0 transition-all duration-300 peer-checked:max-h-full peer-checked:opacity-100 peer-checked:p-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="border-b border-gray-300">
        <input type="checkbox" id="section2" className="hidden peer" />
        <label
          htmlFor="section2"
          className="w-full text-left p-4 font-semibold  hover:bg-black hover:text-gray-100 peer-checked:bg-black peer-checked:text-gray-100 block cursor-pointer"
        >
          Section 2
        </label>
        <div className="ml-auto mr-auto max-w-[1200px] max-h-0 overflow-hidden opacity-0 transition-all duration-300 peer-checked:max-h-full peer-checked:opacity-100 peer-checked:p-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="border-b border-gray-300">
        <input type="checkbox" id="section3" className="hidden peer" />
        <label
          htmlFor="section3"
          className="w-full text-left p-4 font-semibold  hover:bg-black hover:text-gray-100 peer-checked:bg-black peer-checked:text-gray-100 block cursor-pointer"
        >
          Section 3
        </label>
        <div className="ml-auto mr-auto max-w-[1200px] max-h-0 overflow-hidden opacity-0 transition-all duration-300 peer-checked:max-h-full peer-checked:opacity-100 peer-checked:p-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
export default CatDrop;
