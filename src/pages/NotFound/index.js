import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>PÁGINA NÃO ENCONTRADA</h1>
      <Link to="/">Voltar para HOME</Link>
    </>
  );
}

export default NotFound;
