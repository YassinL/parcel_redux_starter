import React from "react";
import styled from "styled-components";
import { Input } from "../components/inputs/Input";
import { SubmitButton } from "../components/inputs/SubmitButton";
import { useCustomRegister } from "../components/utils/CustomRegister";

export const Register = () => {
  const { data, handleChange, handleSubmit } = useCustomRegister();

  return (
    <RegisterPage>
      <RegisterContainer>
        <Title>
          <h2>Inscrivez-vous !</h2>
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
          <SubmitButton name="S'inscire" />
        </form>
      </RegisterContainer>
    </RegisterPage>
  );
};

const RegisterPage = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

const RegisterContainer = styled.div`
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
