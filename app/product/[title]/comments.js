function Comments() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="mt-20 ml-85 text-lg text-amber-950">Add your Comment</h2>
      <hr className="w-200 mb-10 m-auto" />
      <textarea
        className="border-2 bg-white w-200 m-auto"
        cols={60}
        rows={3}
        placeholder="Comments"
      ></textarea>
      <hr className="w-200 mt-5 m-auto" />
      <div className="mt-10 border-2 m-auto w-200 bg-blue-200 p-3">
        <h1 className="text-lg text-neutral-900 underline underline-offset-5 font-bold">
          Person&apos;s Name
        </h1>
        <p className="text-md mt-5">This is one of the great stuff</p>
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
    </div>
  );
}

export default Comments;
