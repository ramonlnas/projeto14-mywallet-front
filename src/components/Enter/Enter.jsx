import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Enter() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const Navigate = useNavigate();

  function newEnter(event) {
    event.preventDefault();
    event.preventDefault();

    axios
      .post("http://localhost:5000", {
        value: value,
        description: description,
      })
      .then((res) => {
        console.log(res.data);
        Navigate("");
      })
      .catch((err) => {
        alert(err.data.message);
        console.log(err.data.message);
      });
  }

  return (
    <Body>
      <Headers>Nova entrada</Headers>
      <Inputs>
        <form onSubmit={newEnter}>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />

          <button type="submit">Salvar entrada</button>
        </form>
      </Inputs>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8c11be;
`;

const Headers = styled.h1`
  width: 326px;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #ffffff;
  margin: 25px 0 40px 0px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 326px;

  input {
    width: 326px;
    height: 58px;
    padding: 18px 0px 17px 15px;
    font-family: "Raleway";
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    margin-bottom: 13px;
    border-radius: 8px;
  }

  button {
    width: 326px;
    height: 46px;
    background: #a328d6;
    border-radius: 5px;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
`;