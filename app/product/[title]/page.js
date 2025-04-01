"use client";
import Header from "@/app/Header";
import Photo from "./photo";
import Footer from "@/app/Footer";
import Comments from "./comments";
import { Qnty } from "./Qnty";
import { useState } from "react";
import { use } from "react";

function Button(props) {
  return (
    <>
      <button className="mt-15 border-2 rounded-md w-60 h-13 text-[23px] bg-amber-300 hover:scale-110">
        {props.text}
      </button>
    </>
  );
}

const ProductPage = ({ params, searchParams }) => {
  const { title } = use(params);
  const productTitle = decodeURIComponent(title);
  const { description, price } = use(searchParams);

  const [qnty, setQnty] = useState({});
  function updateQnty(id, val) {
    setQnty((prev) => ({
      ...prev,
      [id]: Math.max(val, 0),
    }));
  }

  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500">
      <Header />
      <div className="flex flex-row gap-10 justify-between ml-3 mr-3">
        <Photo alt={title} />
        <div className="w-140 bg-blue-100 p-4 rounded-md">
          <h1 className="text-4xl">{productTitle}</h1>
          <p className="mt-10">{description}</p>
          <hr className="mt-4 border border-stone-500 opacity-40" />
          <h2 className="text-3xl mt-8 ml-2">{price}</h2>
          <Qnty id="1" qnty={qnty["1"] || 0} updateQnty={updateQnty} />
          <div className="flex w-full justify-evenly">
            <Button text="Add to Cart" />
            <Button text="Buy now" />
          </div>
        </div>
        <div className="rounded-md w-80 bg-blue-100">
          <p className="text-3xl m-3">{price}</p>
          <Qnty id="1" qnty={qnty["1"] || 0} updateQnty={updateQnty} />
          <div className="flex flex-col justify-center items-center">
            <Button text="Add to Cart" />
            <Button text="Buy now" />
          </div>
        </div>
      </div>
      <Comments />
      <Footer />
    </div>
  );
};

export default ProductPage;
