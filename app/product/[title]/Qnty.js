import Image from "next/image";

export function Qnty({ id, qnty, updateQnty }) {
  return (
    <div className="border-2 rounded-4xl w-40 h-10 flex flex-row justify-between items-center mt-10 m-auto">
      <Image
        src="/assets/minus.svg"
        width={40}
        height={40}
        alt="Bin"
        priority
        onClick={() => updateQnty(id, qnty - 1)}
        className="cursor-pointer"
      />
      <h1 className="w-10 text-center text-2xl pr-1.5">{qnty}</h1>
      <Image
        src="/assets/plus.png"
        width={35}
        height={35}
        alt="Add"
        priority
        onClick={() => updateQnty(id, qnty + 1)}
        className="cursor-pointer"
      />
    </div>
  );
}
