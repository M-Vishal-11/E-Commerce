"use client";

import { useEffect, useState } from "react";
import CommentsBox from "./commentsBox";

function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch("http://localhost:3000/api/comments");
        const data = await res.json();
        setComments(data.slice().reverse());
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    fetchComments();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <div className="flex flex-col justify-center">
      <h2 className="mt-20 ml-85 text-lg text-amber-950">Add your Comment</h2>
      <hr className="w-200 mb-10 m-auto" />

      <form onSubmit={handleSubmit} method="post" className="m-auto">
        <textarea
          cols={60}
          rows={3}
          placeholder="Comments"
          name="comment"
          className="border-2 bg-white w-200"
        ></textarea>
        <input
          type="submit"
          defaultValue="Post"
          className="block ml-[92%] mt-2 text-center bg-blue-600 hover:bg-blue-700 p-1 px-3 rounded-2xl text-white"
        />
      </form>

      <hr className="w-200 mt-5 m-auto" />
      {comments.length > 0 ? (
        comments.map((item, index) => (
          <CommentsBox
            key={item.id || index}
            name={item.name}
            comment={item.comment}
          />
        ))
      ) : (
        <h1>No comments yet</h1>
      )}
    </div>
  );
}

export default Comments;
