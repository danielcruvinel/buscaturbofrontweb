import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Page = () => {
  const nome = useSelector((state) => state.user.name);

  return (
    <>
      <div>Página Sobre</div>
      <Link to="/">HOME</Link>
      <p> {nome} </p>
    </>
  );
};

export default Page;
