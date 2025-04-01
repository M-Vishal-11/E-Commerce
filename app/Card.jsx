"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Card({ title, description, img_url, price }) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(
      `/product/${title}?description=${description}&&price=${price}`
    );
  }, []);

  return (
    <div
      onClick={() =>
        router.push(
          `/product/${title}?description=${description}&&price=${price}`
        )
      }
    >
      <div className=" mb-4 hover:scale-105 cursor-pointer bg-white inline-block border p-2 border-black rounded-md mr-2 ml-4 shadow-[8px_8px_8px_rgba(0,0,0,0.3)]">
        <h1 className="Card-box text-3xl" style={{ fontSize: 24 }}>
          {title}
        </h1>
        <Image
          src="/download.jpeg"
          width={240}
          height={240}
          alt="ecommerce"
          className="m-auto"
          priority
        />
        <div>
          <h1 className="Card-box">{description}</h1>
          <p>..........................................</p>
          <h2 className="p-2 inline-block">
            <b>Price: {price}</b>
          </h2>
          <button
            onClick={(event) => {
              event.stopPropagation();
              router.push("/");
            }}
            className="p-2 px-4 ml-4 rounded-2xl bg-gray-600 text-gray-300 opacity-15 hover:opacity-100 hover:text-gray-50 hover:bg-blue-600 active:bg-fuchsia-600"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
