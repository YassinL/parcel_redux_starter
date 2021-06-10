import React from "react";
import styled from "styled-components";
import { Input } from "../components/inputs/Input";
import { SubmitButton } from "../components/inputs/SubmitButton";
import { useCustomLogin } from "../components/utils/UseCustomLogin";

export const Login = () => {
  const { data, handleChange, handleSubmit } = useCustomLogin();
  return (
    <LoginPage>
      <LoginContainer>
        <Title>
          <h2>Connectez-vous !</h2>
        </Title>
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
