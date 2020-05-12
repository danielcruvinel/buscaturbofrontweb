import React from "react";
import { Modal, Box, Media, Image, Content, Level } from "rbx";

export default () => {
  return (
    <Modal>
      <Modal.Background />
      <Modal.Content>
        <Box>
          <Media>
            <Media.Item as="figure" align="left">
              <Image.Container as="p" size={64}>
                <Image
                  alt="64x64"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </Image.Container>
            </Media.Item>
            <Media.Item>
              <Content>
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                  <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam
                  condimentum luctus turpis.
                </p>
              </Content>
              <Level breakpoint="mobile">
                <Level.Item align="left">{/* Conteúdo */}</Level.Item>
              </Level>
            </Media.Item>
          </Media>
        </Box>
      </Modal.Content>
      <Modal.Close />
    </Modal>
  );
};
