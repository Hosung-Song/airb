import React from "react";
import styled from "styled-components";
import One from "../image/1.jpg";
import Two from "../image/2.jpg";
import Three from "../image/3.jpg";

const HotelDiv = styled.div`
  margin: 40px 0px;
  padding: 0px 80px;
`;

const HotelTitleDiv = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const HotelTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 13px;
  font-size: 22px;
  line-height: 26px;
  color: #222222;
  margin-top: 2px;
`;

const HotelUl = styled.ul`
  margin-left: -5px;
  margin-right: -5px;
  display: flex;
  height: 100%;
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  min-width: 100%;
  scroll-snap-type: x mandatory;
  list-style: none;
`;

const HotelLi = styled.li`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  display: flex;
  white-space: normal;
  max-height: 126px;
  flex-direction: row;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.02);
  border-image: initial;
  border-radius: 12px;
  width: 540px;
  height: 84px;
  margin-left: 8px;
  margin-right: 8px;
`;

const HotelImg = styled.img`
  width: 126px;
  height: 84px;
  border-radius: 12px 0px 0px 12px;
`;

const HotelName = styled.span`
  padding-left: 24px !important;

  display: flex !important;
  align-items: center !important;
  padding-left: 26px !important;
  padding-right: 16px !important;
`;

function Hotel() {
  return (
    <div>
      <HotelDiv>
        <HotelTitleDiv>
          <HotelTitle>에어비앤비 둘러보기</HotelTitle>
        </HotelTitleDiv>
        <HotelUl>
          <HotelLi>
            <HotelImg src={One} alt="hotel-img" />
            <HotelName>숙소</HotelName>
          </HotelLi>
          <HotelLi>
            <HotelImg src={Two} alt="hotel-img" />
            <HotelName>체험</HotelName>
          </HotelLi>
          <HotelLi>
            <HotelImg src={Three} alt="hotel-img" />
            <HotelName>어드밴처</HotelName>
          </HotelLi>
        </HotelUl>
      </HotelDiv>
    </div>
  );
}

export default Hotel;
