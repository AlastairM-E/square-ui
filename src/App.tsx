import React from "react";
import ReactDOM from "react-dom";
import { Button, Container, Input, Link, Subtitle, Text, Title } from "./components";

import "./index.css";

const App = () => (
  <Container>
    <Title>Square-ui</Title>
    <Subtitle>A Bad Design system</Subtitle>
    <Button>Halo</Button>
    <Button loading>Loading</Button>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aliquid saepe nesciunt modi commodi voluptate sunt praesentium. Similique expedita, explicabo dignissimos ex itaque, aperiam facilis veritatis quidem minima vero quas?</Text>
    <Text loading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore eligendi qui unde itaque ipsam sed consectetur nam. Voluptatibus dolorem non iste, nobis nam facilis corrupti doloremque in cupiditate. Reprehenderit?</Text>
    <Link href="./">Homepage</Link>
    <Input pattern="[0-9]{9}" />
  </Container>
);
ReactDOM.render(<App />, document.getElementById("app"));
