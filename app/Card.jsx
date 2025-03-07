import Image from "next/image";

function Card() {
  return (
    <div className=" mb-4 hover:scale-105 cursor-pointer bg-white inline-block border p-2 border-black rounded-md mr-2 ml-4 shadow-[8px_8px_8px_rgba(0,0,0,0.3)]">
      <h1 className="Card-box text-3xl" style={{ fontSize: 24 }}>
        Title
      </h1>
      <Image
        src="/download.jpeg"
        width={240}
        height={240}
        alt="ecommerce"
        className="m-auto"
      />
      <div>
        <h1 className="Card-box">Description</h1>
        <p>..........................................</p>
        <h2 className="p-2 inline-block">
          <b>Price: $300</b>
        </h2>
        <a href="" className="p-2 rounded-2xl bg-blue-600 text-white w-20">
          Buy
        </a>
      </div>
    </div>
  );
}
export default Card;
