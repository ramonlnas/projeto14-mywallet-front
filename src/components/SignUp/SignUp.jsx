import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isCorrectPassword, setIsCorrectPassword] = useState("");
  const Navigate = useNavigate();

  function fazerLogin(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/sign-up", {
        name: name,
        email: email,
        password: password,
        confirm: isCorrectPassword,
      })
      .then((res) => {
        console.log(res.data)
        Navigate("/")
      })
      .catch((err) => {
        console.log(err.data)
      });
  }

  return (
    <Corpo>
      <h1>MyWallet</h1>

      <DivLogin>
        <form onSubmit={fazerLogin}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
          />
          <input
            type="password"
            value={isCorrectPassword}
            onChange={(e) => setIsCorrectPassword(e.target.value)}
            placeholder="Confirme a senha"
            required
          />

          <button type="submit">Cadastrar</button>
        </form>
      </DivLogin>
      <Link to={"/"}>
        <p>Já tem um conta? Entre agora!</p>
      </Link>
    </Corpo>
  );
}
const Corpo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8c11be;

  h1 {
    font-family: "Saira Stencil One";
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
    margin-bottom: 24px;
  }

  p {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 299px;

  input {
    height: 58px;
    width: 326px;
    border-radius: 5px;
    padding: 18px 0px 18px 14px;
    font-family: "Raleway";
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    margin-bottom: 13px;
  }

  button {
    width: 326px;
    height: 46px;
    background: #a328d6;
    border-radius: 5px;
    margin: 8px 0px 24px 0px;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    margin-bottom: 36px;
  }
`;
