import React from "react";
import { Notification } from "rbx";

import Banner from "./Banner";
import Anuncios from "./Anuncios";

export default props => {
  return (
    <div>
      <Banner></Banner>
      <Notification>
        <Anuncios></Anuncios>
      </Notification>
    </div>
  );
};
