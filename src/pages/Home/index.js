import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  // Pegar nome no reducer
  const name = useSelector((state) => state.user.name);
  // Função alterar no reducer
  const dispatch = useDispatch();

  const addName = () => {
    dispatch({
      type: "SET_NAME",
      payload: { name: "Nico" },
    });
  };

  return (
    <>
      <div>PÁGINA INICIAL</div>
      <Link to="/sobre">Sobre</Link>
      <p>Nome armazenado: {name} </p>
      <button onClick={addName}>ADD</button>
    </>
  );
}

export default Home;
