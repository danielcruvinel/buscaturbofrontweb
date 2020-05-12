import React, { useState, useEffect } from "react";
import api from "../../../services/api";
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
  // faAddressBook,
  // faPhoneSquare,
  // faFolder
} from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState([]);
  const [sucessMsg, setSucessMsg] = useState("");

  const [colorEmail, setColorEmail] = useState("");
  const [colorPassword, setColorPassword] = useState("");

  const [inputColorEmail, setInputColorEmail] = useState("");
  const [inputColorPassword, setInputColorPassword] = useState("");

  async function cadastro(e) {
    e.preventDefault();
    if ((email, password !== "")) {
      // const response = await api
      await api
        .post("/login", {
          email,
          password,
        })
        .then((res) => {
          setSucessMsg(res.token);
          console.log(res.token);
        })
        .catch((e) => {
          setErrorMsg([...errorMsg, { id: Math.random(), msg: e.toString() }]);
        });
      setEmail("");
      setPassword("");
    } else {
      setErrorMsg([
        ...errorMsg,
        { id: Math.random(), msg: "Está faltando algo" },
      ]);
    }
  }

  useEffect(() => {
    function colorizeEmail() {
      if (email !== "") {
        setColorEmail("green");
      } else {
        setInputColorEmail("danger");
      }
    }
    colorizeEmail();

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
              Login
            </Title>
            <form onSubmit={cadastro}>
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
                <Control style={{ paddingTop: 5 }}>
                  <Button style={{ width: 100, height: 40 }} color="link">
                    Entrar
                  </Button>
                </Control>
              </Field>
            </form>
          </Notification>

          {errorMsg
            .map((i) => (
              <Notification key={i.id} color="danger">
                {console.log(i)}
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
