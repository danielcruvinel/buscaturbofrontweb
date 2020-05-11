import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLogged } from "../../helpers/authHandler";

function Home() {
  let logged = isLogged();

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
  const limpar = () => {
    dispatch({
      type: "SET_NAME",
      payload: { name: "" },
    });
  };

  return (
    <>
      <div>PÁGINA INICIAL</div>
      <Link to="/sobre">Sobre</Link>
      <p>Nome armazenado: {name} </p>
      <button onClick={addName}>ADD</button>
      <br />
      <br />
      <button onClick={limpar}>Limpar</button>
      <br />
      <br />
      <br />
      {logged && <>LOGADO</>}
      {!logged && <>NÂO LOGADO</>}
    </>
  );
}

export default Home;
