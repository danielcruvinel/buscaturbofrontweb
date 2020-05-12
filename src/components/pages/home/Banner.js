import React from "react";
import { Hero, Image } from "rbx";
import Banner from "../../../assets/img/banner.jpg";

export default props => {
  return (
    <Hero gradient color="info">
      <Image.Container size={300}>
        <Image src={Banner} />
      </Image.Container>
      {/* <Hero.Body>
                <Container>
                    <Title>Você está em Morrinhos</Title>
                    <Title as='h2' subtitle>Busque aqui</Title>
                </Container>
            </Hero.Body> */}
    </Hero>
  );
};
