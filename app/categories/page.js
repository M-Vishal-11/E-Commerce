import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import CatDrop from "./Catdrop.jsx"

const page = () => {
  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500">
      <Header />
      <div className="gap-16 m-3 bg-white">
        <CatDrop idkey={"1"} name={"Category 1"}/>
        <CatDrop idkey={"2"} name={"Category 2"}/>
        <CatDrop idkey={"3"} name={"Category 3"}/>
        <CatDrop idkey={"4"} name={"Category 4"}/>
        <CatDrop idkey={"5"} name={"Category 5"}/>
        <CatDrop idkey={"6"} name={"Category 6"}/>
      </div>
      <Footer />
    </div>
  );
};

export default page;