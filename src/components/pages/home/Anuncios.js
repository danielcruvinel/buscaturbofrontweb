import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import "./style.css";

import { Container, Card, Image, Title, Content, Column } from "rbx";
// import Img from "../../../assets/img/test.jpg";
// import Img2 from "../../../assets/img/punto.png";

export default () => {
  const [veiculos, setVeiculos] = useState([]);
  const [negocios, setNegocios] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get("/veiculos");

      setVeiculos(response.data);
    }
    load();
  }, []);

  useEffect(() => {
    async function load() {
      const response = await api.get("/negocios");

      setNegocios(response.data);
    }
    load();
  }, []);

  return (
    <>
      <Container style={{ paddingTop: 10 }}>
        <Title style={{ color: "#003d9e" }}>Veículos</Title>
        <Title style={{ color: "#003d9e" }} subtitle>
          Carros, motos e outros{" "}
          <strong style={{ color: "#003d9e" }}>em Morrinhos</strong>{" "}
        </Title>

        <Column.Group>
          {veiculos.map((veiculos) => (
            <Column key={veiculos.id}>
              <Card>
                <Card.Image>
                  {/* <Image.Container size="4by3"> */}
                  <Image.Container>
                    <Image
                      id="cardimage"
                      src={
                        "http://localhost:1337" +
                        veiculos.avatar.formats.small.url
                      }
                    />
                  </Image.Container>
                </Card.Image>
                <Card.Content style={{ height: 165 }}>
                  <Content>
                    <Title id="title" style={{ color: "#003d9e" }} size={5}>
                      {veiculos.name} &nbsp;
                      {veiculos.ano}
                    </Title>
                    <span id="desc" style={{ color: "#003d9e" }}>
                      {veiculos.cor}
                    </span>
                  </Content>
                </Card.Content>
              </Card>
            </Column>
          ))}
        </Column.Group>

        <br />
        <Title style={{ color: "#003d9e" }}>Negócios</Title>
        <Title style={{ color: "#003d9e" }} subtitle>
          <span style={{ color: "#003d9e" }}>
            Restaurantes, Lanchonetes, Saúde e Beleza{" "}
          </span>
          <strong style={{ color: "#003d9e" }}>em Morrinhos</strong>
        </Title>

        <Column.Group>
          {negocios.map((negocios) => (
            <Column key={negocios.id}>
              <a
                rel="noopener noreferrer"
                id="link"
                target="_blank"
                href={"http://localhost:1337" + negocios.avatar.url}
              >
                <Card>
                  <Card.Image>
                    <Image.Container>
                      <Image
                        id="cardimage"
                        src={
                          "http://localhost:1337" +
                          negocios.avatar.formats.small.url
                        }
                      />
                    </Image.Container>
                  </Card.Image>
                  <Card.Content style={{ height: 165 }}>
                    <Content>
                      <Title style={{ color: "#003d9e" }} size={5}>
                        {negocios.name}
                      </Title>
                      <span style={{ color: "#003d9e" }}>
                        {" "}
                        {negocios.local}{" "}
                      </span>
                    </Content>
                  </Card.Content>
                </Card>
              </a>
            </Column>
          ))}
        </Column.Group>
      </Container>
    </>
  );
};
