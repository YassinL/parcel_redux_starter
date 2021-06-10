import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const NavButton = ({ text }) => {
  return (
    <NavButtonContainer>
      <button>{text}</button>
    </NavButtonContainer>
  );
};

const NavButtonContainer = styled.div`
  & button {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
    font-weight: bold;
    font-size: 14px;
    padding: 7px 10px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
  }
  & button:hover {
    background-color: #4353ff;
    color: #fafafa;
  }
`;

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
};
