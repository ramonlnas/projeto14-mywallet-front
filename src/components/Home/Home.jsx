import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { Content, Corpo, Footer, Header, InsideFooter, Infos,InsideContent } from "./style";

export default function Home() {
  const { name, token, id } = useContext(AuthContext);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        id: id,
      },
    };

    axios
      .get("http://localhost:5000/enter", config)
      .then((res) => {
        console.log(res.data);
        setInfo(res.data.isUser);
        
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
          const { time, description, value, type } = i;
          console.log(info)

          return info.length === 0 ? (
            <InsideContent>
              <p>Não há registros de entrada ou saída</p>
            </InsideContent> 
          ) : (
            <Infos>
              <span>{time}</span>
              <h2>{description}</h2>
              <h3>{value}</h3>
            </Infos>
          );
        })}
      </Content>
      <Footer>
        <Link to={"/enter"}>
          <InsideFooter>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>Nova entrada</p>
          </InsideFooter>
        </Link>
        <Link to={"/out"}>
          <InsideFooter>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saída</p>
        </InsideFooter>
        </Link>
      </Footer>
    </Corpo>
  );
}
