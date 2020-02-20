import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import Search from "./Search";
import Nav from "./Nav";
import Hotel from "./Hotel";

const Header = styled.header`
  position: relative;
  z-index: 5;
  font-weight: 600;
  box-shadow: 0 1px 0 #ebebeb;
  background: #ffffff;
  transition-duration: 200ms;
  transition-property: background, box-shadow;
  transition-timing-function: ease-out;
  width: 100%;
`;

function Home() {
  return (
    <>
      <div>
        <Header>
          <Logo />
          <Search />
          <Nav />
        </Header>
        <main>
          <Hotel />
        </main>
      </div>
    </>
  );
}

export default Home;
