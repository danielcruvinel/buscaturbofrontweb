import React, { useState, useEffect } from "react";
import api from "../../../services/api";
// import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/logo2.svg";
import "./style.css";

import {
  Field,
  Control,
  Input,
  Icon,
  Notification,
  Column,
  Title,
  Button,
  Delete,
  Image,
} from "rbx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCheck,
  faLock,
  faAddressBook,
  faPhoneSquare,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("normal");
  const [img, setImg] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState([]);
  const [sucessMsg, setSucessMsg] = useState("");

  const [colorName, setColorName] = useState("");
  const [colorEmail, setColorEmail] = useState("");
  const [colorTelefone, setColorTelefone] = useState("");
  const [colorImg, setColorImg] = useState("");
  const [colorPassword, setColorPassword] = useState("");

  const [inputColorName, setInputColorName] = useState("");
  const [inputColorEmail, setInputColorEmail] = useState("");
  const [inputColorTelefone, setInputColorTelefone] = useState("");
  const [inputColorImg, setInputColorImg] = useState("");
  const [inputColorPassword, setInputColorPassword] = useState("");

  async function cadastro(e) {
    e.preventDefault();
    if ((name, email, telefone, tipo, img, password !== "")) {
      // const response = await api
      await api
        .post("/user_public", {
          name,
          email,
          telefone,
          tipo,
          img,
          password,
        })
        .then((res) => {
          // setSucessMsg(res.data.name);
          // this.props.match.params.login;
        })
        .catch((e) => {
          setErrorMsg([...errorMsg, { id: Math.random(), msg: e.toString() }]);
        });
      setName("");
      setPassword("");
      setTelefone("");
      setTipo("");
      setImg("");
      setPassword("");
    } else {
      setErrorMsg([
        ...errorMsg,
        { id: Math.random(), msg: "Está faltando algo" },
      ]);
    }
  }

  useEffect(() => {
    function colorizeName() {
      if (name !== "") {
        setColorName("green");
      } else {
        setInputColorName("danger");
      }
    }
    colorizeName();

    function colorizeEmail() {
      if (email !== "") {
        setColorEmail("green");
      } else {
        setInputColorEmail("danger");
      }
    }
    colorizeEmail();

    function colorizeTelefone() {
      if (telefone !== "") {
        setColorTelefone("green");
      } else {
        setInputColorTelefone("danger");
      }
    }
    colorizeTelefone();

    function colorizeImg() {
      if (img !== "") {
        setColorImg("green");
      } else {
        setInputColorImg("danger");
      }
    }
    colorizeImg();

    function colorizePassword() {
      if (password !== "") {
        setColorPassword("green");
      } else {
        setInputColorPassword("danger");
      }
    }
    colorizePassword();
  });

  return (
    <Notification style={{ paddingBottom: 0, marginBottom: 0 }}>
      <Column.Group style={{ paddingTop: 40, paddingBottom: 250 }}>
        <Column id="box" size="half " offset="one-quarter">
          <Column id="img" size="half">
            <Image.Container style={{ paddingBottom: 15 }}>
              <Image id="logo" style={{ color: "black" }} src={Logo} />
            </Image.Container>
          </Column>

          <Notification
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: "#dce9ff",
            }}
          >
            <Title style={{ color: "#003d9e" }} color="link">
              Cadastro
            </Title>
            <form onSubmit={cadastro}>
              <Field>
                <Control iconLeft iconRight>
                  <Input
                    size="medium"
                    type="text"
                    color={inputColorName}
                    placeholder="Nome completo"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setColorName();
                      setInputColorName();
                    }}
                  />
                  <Icon align="left">
                    <FontAwesomeIcon icon={faAddressBook} size="sm" />
                  </Icon>
                  <Icon align="right">
                    <FontAwesomeIcon
                      color={colorName}
                      icon={faCheck}
                      size="sm"
                    />
                  </Icon>
                </Control>
              </Field>

              <Field>
                <Control iconLeft iconRight>
                  <Input
                    size="medium"
                    type="email"
                    color={inputColorEmail}
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setColorEmail();
                      setInputColorEmail();
                    }}
                  />
                  <Icon align="left">
                    <FontAwesomeIcon icon={faEnvelope} size="sm" />
                  </Icon>
                  <Icon align="right">
                    <FontAwesomeIcon
                      color={colorEmail}
                      icon={faCheck}
                      size="sm"
                    />
                  </Icon>
                </Control>
              </Field>

              <Field>
                <Control iconLeft iconRight>
                  <Input
                    size="medium"
                    type="tel"
                    color={inputColorTelefone}
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => {
                      setTelefone(e.target.value);
                      setColorTelefone();
                      setInputColorTelefone();
                    }}
                  />
                  <Icon align="left">
                    <FontAwesomeIcon icon={faPhoneSquare} size="sm" />
                  </Icon>
                  <Icon align="right">
                    <FontAwesomeIcon
                      color={colorTelefone}
                      icon={faCheck}
                      size="sm"
                    />
                  </Icon>
                </Control>
              </Field>

              <Field>
                <Control iconLeft iconRight>
                  <Input
                    size="medium"
                    type="url"
                    color={inputColorImg}
                    placeholder="Imagem"
                    value={img}
                    onChange={(e) => {
                      setImg(e.target.value);
                      setColorImg();
                      setInputColorImg();
                    }}
                  />
                  <Icon align="left">
                    <FontAwesomeIcon icon={faFolder} size="sm" />
                  </Icon>
                  <Icon align="right">
                    <FontAwesomeIcon
                      color={colorImg}
                      icon={faCheck}
                      size="sm"
                    />
                  </Icon>
                </Control>
              </Field>

              <Field>
                <Control iconLeft iconRight>
                  <Input
                    size="medium"
                    type="password"
                    color={inputColorPassword}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setColorPassword();
                      setInputColorPassword();
                    }}
                  />
                  <Icon align="left">
                    <FontAwesomeIcon icon={faLock} size="sm" />
                  </Icon>
                  <Icon align="right">
                    <FontAwesomeIcon
                      color={colorPassword}
                      icon={faCheck}
                      size="sm"
                    />
                  </Icon>
                </Control>
              </Field>
              <Field>
                <Control>
                  <Button color="link">Cadastrar</Button>
                </Control>
              </Field>
            </form>
          </Notification>

          {errorMsg
            .map((i) => (
              <Notification key={i.id} color="danger">
                <Delete as="button" onClick={(e) => setErrorMsg([])} />
                <strong>{i.msg}</strong>
              </Notification>
            ))
            .reverse()}

          {sucessMsg !== "" ? (
            <Notification color="primary">
              <Delete as="button" onClick={(e) => setSucessMsg("")} />
              <strong>{sucessMsg}</strong>
            </Notification>
          ) : (
            ""
          )}
        </Column>
      </Column.Group>
    </Notification>
  );
};
