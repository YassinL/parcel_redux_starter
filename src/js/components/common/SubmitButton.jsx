import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const SubmitButton = ({ name }) => {
  return (
    <ButtonContainer>
      <SubmitButtonBox>{name}</SubmitButtonBox>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const SubmitButtonBox = styled.button`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
  font-weight: bold;
  font-size: 14px;
  padding: 7px 10px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  :hover {
    background-color: #4353ff;
    color: #fafafa;
  }
`;

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
};
