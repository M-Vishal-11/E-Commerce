"use client";
import Image from "next/image";
import { Add } from "./add";

export const CartCard = () => {
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
          <Add />
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
