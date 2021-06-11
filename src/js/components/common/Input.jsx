import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Input = ({ text, name, type, onChange, value, required }) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{text}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={`Entrez votre ${text}`}
        required={required}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3%;
  & label {
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    padding-bottom: 5px;
  }
  & input {
    border: none;
    border-bottom: 1px solid #cdd2d4;
    padding: 5px 0;
    outline: none;
    background-color: transparent;
  }
`;

Input.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
