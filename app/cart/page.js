import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

const CartCard = () => {
  return (
    <>
      <div className="mt-5 flex flex-row">
        <div>
          <Image
            src="/download.jpeg"
            width={240}
            height={200}
            className="ml-2 "
            alt="image"
            priority
          />
        </div>
        <div className="ml-16 flex flex-col w-125">
          <h1 className="text-2xl truncate max-w-100">
            The Radio of the Year award ndj dklf kd fkjd dijfdj kdf jd
          </h1>
          <p className="truncate max-w-90 mb-12">
            This is the discription of the product mdfd fdj fljsd fsdkfj sdf djf
            ojdfj djf ;l kldsjf;l sd
          </p>
          <div className="border-2 rounded-4xl w-40 h-10 flex flex-row justify-between items-center">
            <Image
              src="/assets/bin.png"
              width={50}
              height={50}
              alt="Bin"
              priority
            />
            <h1 className="w-10 text-center text-2xl pr-1.5">11</h1>
            <Image
              src="/assets/plus.png"
              width={35}
              height={35}
              alt="Add"
              priority
            />
          </div>
          <p className="mt-12 text-12 text-stone-600">Delete</p>
        </div>
        <div className="">
          <p className="text-2xl font-bold">$300</p>
        </div>
      </div>
      <hr className="mt-2 border border-stone-500 opacity-40" />
    </>
  );
};

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
