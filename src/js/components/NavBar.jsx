import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { NavButton } from "./inputs/NavButton";

export const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/register">
            <NavButton text={"Register"} />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <NavButton text={"Login"} />
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  & ul {
    display: flex;

    & li {
      margin: 0 20px;
      list-style: none;
    }
  }
`;
