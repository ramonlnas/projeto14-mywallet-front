import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Content, Corpo, Footer, Header, InsideFooter } from "./style";


export default function Home() {
  return (
    <Corpo>
      <Header>
        <h1>Olá, Fulano</h1>
        <ion-icon name="log-out-outline"></ion-icon>
      </Header>
      <Content>
        <p>Não há registros de entrada ou saída</p>
      </Content>
      <Footer>
        <InsideFooter>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova entrada</p>
        </InsideFooter>
        <InsideFooter>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saída</p>
        </InsideFooter>
      </Footer>
    </Corpo>
  );
}

