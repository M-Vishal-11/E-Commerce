import Header from "@/app/Header";
import Photo from "./photo";
import Footer from "@/app/Footer";
import Image from "next/image";

function Button(props) {
  return (
    <>
      <button className="mt-15 border-2 rounded-md w-60 h-13 text-[23px] bg-amber-300">
        {props.text}
      </button>
    </>
  );
}

function Qnty() {
  return (
    <div className="border-2 rounded-4xl w-40 h-10 flex flex-row justify-between items-center mt-10 m-auto">
      <Image src="/assets/bin.png" width={50} height={50} alt="Bin" />
      <h1 className="w-10 text-center text-2xl pr-1.5">11</h1>
      <Image src="/assets/plus.png" width={35} height={35} alt="Add" />
    </div>
  );
}

const ProductPage = async ({ params }) => {
  const { title } = await params;

  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500">
      <Header />
      <div className="flex flex-row gap-10 justify-between">
        <Photo alt={title} />
        <div className="w-140 bg-blue-100 p-4 rounded-md">
          <h1 className="text-4xl">
            The great radio of all time ald dkflsjd kdj fkjd f kdfj{" "}
          </h1>
          <p className="mt-10">the great product of the world</p>
          <hr className="mt-4 border border-stone-500 opacity-40" />
          <h2 className="text-3xl mt-8 ml-2">$1000</h2>
          <Qnty />
          <div className="flex w-full justify-evenly">
            <Button text="Add to Cart" />
            <Button text="Buy now" />
          </div>
        </div>
        <div className="rounded-md w-80 mr-3 bg-blue-100">
          <p className="text-3xl m-3">$1000</p>
          <Qnty />
          <div className="flex flex-col justify-center items-center">
            <Button text="Add to Cart" />
            <Button text="Buy now" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
