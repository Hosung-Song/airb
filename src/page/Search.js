import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchDiv = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 72%;
`;

const SearchBorder = styled.div`
  left: 80px;
  top: 16px;
  width: ${props => (props.focused ? 600 : 460)}px;
  display: table;
  z-index: 21;
  vertical-align: middle;
  background-color: #ffffff;
  transition: 200ms ease-in;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 48px;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(26, 26, 29, 0.05);
  }
`;

const SearchIconDiv = styled.div`
  padding-left: 13px;
  padding-right: 13px;
  width: 39px;
  display: table-cell;
  height: 100%;
  vertical-align: middle;
`;

const SearchIcon = styled(FaSearch)`
  height: 18px;
  width: 18px;
  display: block;
  fill: currentColor;
`;

const SearchBarDiv = styled.div`
  display: table-cell;
  height: 100%;
  vertical-align: middle;
  width: 100%;
`;

const SearchBar = styled.input`
  background-color: transparent;
  border: 0px;
  margin: 0px;
  padding: 0px;
  width: 400px;
  text-overflow: ellipsis;
  font-weight: 800;
  font-size: 17px;
  color: #484848;
  overflow: hidden;
  position: relative;
  outline: none;
`;

const ModalDiv = styled.div`
  position: absolute;
  visibility: ${props => (props.focused ? "visible" : "hidden")};
  width: ${props => (props.focused ? 600 : 460)}px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #ebebeb;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);
  overflow: hidden;
  padding-top: 8px;
  transition: 200ms ease-in;
  margin: 0px;
  padding: 0px;
`;

const ModalTitleDiv = styled.div`
  padding-bottom: 2px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 16px;
`;

const ModalTitle = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 12px;
  font-weight: 800;
  color: #484848;
`;

const ModalUl = styled.ul`
  margin: 0px 0px 16px;
  padding: 11px 29px;
  list-style-type: circle;
  margin-block-start: 0px;
  margin-block-end: 0px;
`;

const ModalLi = styled.li`
  margin: 0px 0px 16px;
  list-style-type: none;
  padding: 1px;
  display: flex;
  cursor: pointer;
  text-decoration: none;
`;

const ListStyle = styled.div`
  padding: 2px;
  margin-right: 2px;
  &:hover {
    border: 2px solid black;
    border-radius: 15px;
  }
`;

const ModalList = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  font-weight: 600;
  padding: 12px 21px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 12px;
  border-color: rgb(0, 0, 0);
  &:hover {
    border-color: rgb(34, 34, 34);
  }
`;

const ModalLists = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  padding: 12px 21px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(176, 176, 176);
  border-image: initial;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400;
`;

function Search() {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <SearchDiv>
        <SearchBorder
          focused={focused}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <SearchIconDiv>
            <SearchIcon />
          </SearchIconDiv>
          <SearchBarDiv>
            <SearchBar
              type="text "
              placeholder="'런던'에 가보는 건 어떠세요?"
            />
          </SearchBarDiv>
        </SearchBorder>

        <ModalDiv
          focused={focused}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <ModalTitleDiv>
            <ModalTitle>에어비앤비 둘러보기</ModalTitle>
          </ModalTitleDiv>
          <ModalUl>
            <ModalLi>
              <ListStyle>
                <ModalList>모두</ModalList>
              </ListStyle>
              <ListStyle>
                <ModalLists>숙소</ModalLists>
              </ListStyle>
              <ListStyle>
                <ModalLists>체험</ModalLists>
              </ListStyle>
              <ListStyle>
                <ModalLists>어드밴처</ModalLists>
              </ListStyle>
            </ModalLi>
          </ModalUl>
        </ModalDiv>
      </SearchDiv>
    </>
  );
}

export default Search;
