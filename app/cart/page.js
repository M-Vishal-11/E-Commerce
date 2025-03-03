import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

const CartCard = () => {
  return (
    <div className="mt-14 flex flex-row">
      <div>
        <Image
          src="/download.jpeg"
          width={240}
          height={200}
          className="ml-2 "
          alt=""
        />
      </div>
      <div className="ml-16 flex flex-col">
        <h1 className="text-2xl">The Radio of the Year award</h1>
      </div>
      <div className="ml-32">
        <p className="text-2xl font-bold">$300</p>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500">
      <Header />
      <div className="flex flex-row gap-16 m-3">
        <main className="p-5 shadow-lg w-[75%] bg-blue-100 rounded-md">
          <div className="flex justify-between m-2 ml-14 mr-14 text-black">
            <h2 className="text-3xl">Shopping Cart</h2>
            <h4 className="text-md">Price</h4>
          </div>
          <hr />
          <CartCard />
        </main>
        <sidebar>
          <div className="shadow-md bg-blue-100 rounded-md">
            <h1 className="text-2xl pl-26 pt-14 pb-2 mb-16">SubTotal: $3000</h1>
            <button className="w-96 bg-amber-300 text-center pt-4 pb-4 mb-7 m-2 rounded-full border-2">
              Proceed to pay
            </button>
          </div>
        </sidebar>
      </div>
      <Footer />
    </div>
  );
};

export default page;
