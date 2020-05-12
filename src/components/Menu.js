import React from "react";
import { Navbar, Button, Container, Icon } from "rbx";
import Logo from ".././assets/img/logo.svg";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Navbar color="link">
      <Container>
        <Navbar.Brand>
          <Navbar.Item href="/">
            <img src={Logo} alt="Logotipo" role="presentation" />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Link to="/" style={{ margin: "auto" }}>
              <Button
                style={{ fontSize: "16px" }}
                is-outlined="true"
                color="link"
              >
                {/* <Icon backgroundColor="warning"> */}
                <Icon>
                  <i className="fa fa-search" aria-hidden="true"></i>
                </Icon>
                <span>Home</span>
              </Button>
            </Link>

            <Link to="/negocios" style={{ margin: "auto" }}>
              <Button
                style={{ fontSize: "16px" }}
                is-outlined="true"
                color="link"
              >
                {/* <Icon backgroundColor="warning"> */}
                <Icon>
                  <i className="fa fa-handshake-o" aria-hidden="true"></i>
                </Icon>
                <span style={{ paddingleft: 2 }}>Negócios</span>
              </Button>
            </Link>

            <Link to="/imoveis" style={{ margin: "auto" }}>
              <Button
                style={{ fontSize: "16px" }}
                is-outlined="true"
                color="link"
              >
                {/* <Icon backgroundColor="warning"> */}
                <Icon>
                  <i className="fa fa-home" aria-hidden="true"></i>
                </Icon>
                <span style={{ paddingleft: "2px" }}>Imóveis</span>
              </Button>
            </Link>

            <Navbar.Item dropdown>
              <Icon style={{ margin: "auto", marginRight: -5 }}>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </Icon>
              <Navbar.Link>Cidades</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item>Morrinhos</Navbar.Item>
                <Navbar.Item>Caldas Novas</Navbar.Item>
                <Navbar.Item>Itumbiara</Navbar.Item>
                <Navbar.Item>Rio Verde</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Todas</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Segment>

          <Navbar.Segment align="center">
            <Button.Group>
              {/* ANDROID */}
              <Button
                style={{ fontSize: "22px" }}
                is-outlined="true"
                color="link"
              >
                <Icon>
                  <i className="fa fa-android" aria-hidden="true"></i>
                </Icon>
                <span style={{ fontSize: 15 }}>Android</span>
              </Button>
              {/* IOS */}
              {/* outlined  color="white" */}
              <Button
                style={{ fontSize: "22px" }}
                is-outlined="true"
                color="link"
              >
                <Icon>
                  <i className="fa fa-apple" aria-hidden="true"></i>
                </Icon>
                <span style={{ fontSize: "15px" }}>iOs</span>
              </Button>
            </Button.Group>
          </Navbar.Segment>

          <Navbar.Segment align="end">
            <Button.Group>
              {/* <Button style={{color: "#3273dc"}}>Cadastre-se</Button> */}
              <Link to="/cadastro">
                <Button is-outlined="true" color="link">
                  Cadastrar
                </Button>
              </Link>
              <Link to="login">
                <Button is-outlined="true" color="link">
                  Entrar
                </Button>
              </Link>
            </Button.Group>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
};
