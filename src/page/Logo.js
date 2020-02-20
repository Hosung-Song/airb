import React from "react";
import logo from "../image/logo.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoDiv = styled.div`
  display: table-cell;
  vertical-align: middle;
  position: relative;
  z-index: 20;
  height: 80px;
  padding: 0 24px;
`;

const LogoStyle = styled.img`
  width: 34px;
  height: 34px;
`;

function Logo() {
  return (
    <LogoDiv>
      <Link to="/">
        <LogoStyle src={logo} alt="logo" />
      </Link>
    </LogoDiv>
  );
}

export default Logo;
