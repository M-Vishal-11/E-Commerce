import { useEffect, useState } from "react";

const CommentsBox = ({ name, comment }) => {
  return (
    <div className="mt-10 border-2 m-auto w-200 bg-blue-200 p-3">
      <h1 className="text-lg text-neutral-900 underline underline-offset-5 font-bold">
        {name}
      </h1>
      <p className="text-md mt-5">{comment}</p>
      <button className="mt-5 border-2 rounded-md w-18 text-lg font-bold bg-amber-300">
        Like
      </button>
      <button className="ml-5 border-2 rounded-md w-18 text-lg font-bold bg-amber-300">
        Dislike
      </button>
      <button className="ml-5 border-2 rounded-md w-18 text-lg font-bold bg-amber-300">
        Edit
      </button>
      <button className="ml-5 border-2 rounded-md w-18 text-lg font-bold bg-amber-300">
        Delete
      </button>
    </div>
  );
};

export default CommentsBox;
