import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { CartCard } from "./CartCard";

const page = () => {
  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500">
      <Header />
      <div className="flex flex-row gap-16 m-3">
        <main className="p-5 pr-10 shadow-lg w-[75%] bg-blue-100 rounded-md">
          <div className="flex justify-between m-2 ml-14 mr-14 text-black">
            <h2 className="text-3xl">Shopping Cart</h2>
            <h4 className="text-md">Price</h4>
          </div>
          <hr className="mb-12" />
          <CartCard />
          <CartCard />
        </main>
        <div>
          <div className="shadow-md bg-blue-100 rounded-md">
            <h1 className="text-2xl pl-26 pt-14 pb-2 mb-16">SubTotal: $3000</h1>
            <button className="w-96 bg-amber-300 text-center pt-4 pb-4 mb-7 m-2 rounded-full border-2">
              Proceed to pay
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
