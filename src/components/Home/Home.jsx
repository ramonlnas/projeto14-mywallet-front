import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  Content,
  Corpo,
  Footer,
  Header,
  InsideFooter,
  Infos,
  InsideContent,
  Total,
} from "./style";

export default function Home() {
  const { name, token, id } = useContext(AuthContext);
  const [info, setInfo] = useState([]);
  const [total, setTotal] = useState(0);
  const [typeOut, setTypeOut] = useState([])
  const [typeEnter, setTypeEnter] = useState([])

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
        setTotal(total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <Corpo>
      <Header>
        <h1>Olá, {name}</h1>
        <Link to={"/"}>
          <ion-icon name="log-out-outline"></ion-icon>
        </Link>
      </Header>
      <Content>
        {info.map((i, index) => {
          const { time, description, value, type } = i;

          return info.length === 0 ? (
            <p>Não há registros de entrada ou saída</p>
          ) : (
            <>
              <Infos key={index}>
                <span>{time}</span>
                <h2>{description}</h2>
                <h3 style={{ color: type === "enter" ? "#03AC00" : "#C70000" }}>
                  {value}
                </h3>
              </Infos>
              <Total>
                <h1>Saldo</h1>
                <p>{total}</p>
              </Total>
            </>
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
