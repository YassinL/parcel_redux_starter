import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { Input } from "../components/common/Input";
import { SubmitButton } from "../components/common/SubmitButton";
import { useCustomLogin } from "../components/utils/UseCustomLogin";
import Logo from "../../assets/images/3.png";

export const Login = () => {
  const { data, error, handleChange, handleSubmit } = useCustomLogin();
  return (
    <LoginPage>
      <LoginContainer>
        <ImageContainer>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </ImageContainer>
        <Title>
          <h2>Connectez-vous !</h2>
        </Title>
        <span style={{ color: "red", alignItems: "center" }}>
          {error && error}
        </span>
        <form onSubmit={handleSubmit}>
          <Input
            text={"Email"}
            name={"email"}
            type={"email"}
            onChange={handleChange}
            value={data.email}
            required
          />
          <Input
            text={"Password"}
            name={"password"}
            type={"password"}
            onChange={handleChange}
            value={data.password}
            required
          />
          <SubmitButton name="Se connecter" />
        </form>
      </LoginContainer>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

const LoginContainer = styled.div`
  background-color: #fafafa;
  padding: 6%;
  width: 15vw;
  border-radius: 15px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.75);
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  height: 12vh;
  display: flex;
  justify-content: center;
  & img {
    height: 100%;
    width: auto;
  }
`;
