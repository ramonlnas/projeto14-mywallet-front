import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { Content, Corpo, Footer, Header, InsideFooter, Infos } from "./style";

export default function Home() {
  const { name, token } = useContext(AuthContext);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("http://localhost:5000/enter", config)
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Corpo>
      <Header>
        <h1>Olá, {name}</h1>
        <ion-icon name="log-out-outline"></ion-icon>
      </Header>
      <Content>
        {info.map((i) => {
          const { value, description, time, type } = i;
          return info.length === 0 ? (
            <p>Não há registros de entrada ou saída</p>
          ) : (
            <Infos>
              <span>{value.time}</span>
              <h2>{value.description}</h2>
              <h3>{value.value}</h3>
            </Infos>
          );
        })}
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
