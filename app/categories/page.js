import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import CatDrop from "./Catdrop.jsx";

const id = 1;
const page = () => {
  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500">
      <Header />
      <div className="gap-16 m-3 bg-white">
        <CatDrop />
      </div>
      <Footer />
    </div>
  );
};

export default page;
