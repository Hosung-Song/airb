import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavDiv = styled.nav`
  display: table-cell;
`;

const NavUl = styled.ul`
  height: 64px;
  list-style: none;
  display: flex;
  margin: 0px;
`;

const NavLi = styled.li`
  margin: 14px;
  padding-top: 16px;
  font-size: 14px;
  color: #484848;
`;

function Nav() {
  return (
    <NavDiv>
      <NavUl>
        <NavLi>호스트가 되어보세요</NavLi>
        <NavLi>도움말</NavLi>
        <NavLi>회원가입</NavLi>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <NavLi>로그인</NavLi>
        </Link>
      </NavUl>
    </NavDiv>
  );
}

export default Nav;
