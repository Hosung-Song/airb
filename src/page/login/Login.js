import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { FiLock } from "react-icons/fi";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Logindiv = styled.div`
  position: fixed;
  z-index: 2000;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.75);
`;

const LoginTable = styled.div`
  vertical-align: middle;
  padding: 64px;
`;

const LoginBox = styled.div`
  background-color: rgb(255, 255, 255);
  max-width: 568px;
  width: 100%;
  position: relative;
  margin: auto;
`;

const LogoinPage = styled.div`
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  padding: 32px;
`;

const LogCloseBt = styled.button`
  padding: 20px;
  margin: -20px;
  cursor: pointer;
  background-color: transparent;
  color: buttontext;
  display: block;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: none;
  font-size: 25px;
`;

const FbBt = styled.button`
  cursor: pointer;
  transition-property: background, border-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: normal;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 800;
  padding-left: 22px;
  padding-right: 22px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  background: rgb(69, 104, 178);
  border-color: transparent;
  margin: 20px 0px 13px;
`;

const GlBt = styled.button`
  cursor: pointer;
  transition-property: background, border-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: normal;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 800;
  padding-left: 22px;
  padding-right: 22px;
  color: rgb(72, 72, 72);
  text-decoration: none;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  background: rgb(255, 255, 255);
  border-color: rgb(118, 118, 118);
`;

const LgOr = styled.div`
  margin-top: 16px;
  overflow: hidden;
  margin-bottom: 16px;
  text-align: center;
  position: relative;
`;

const LgLine = styled.span`
  border-bottom-color: #e4e4e4;
  &:before {
    content: "";
    position: absolute;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(228, 228, 228);
    top: 50%;
    right: 55%;
    width: 5000px;
  }
  &:after {
    content: "";
    position: absolute;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(228, 228, 228);
    top: 50%;
    left: 55%;
    width: 5000px;
  }
`;

const LgName = styled.span`
  overflow-wrap: break-word;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28571em;
  color: rgb(118, 118, 118);
  margin: 0px;
`;

const Email = styled.div`
  border: ${props =>
    props.focused ? "1px solid #008389" : " 1px solid #ebebeb;"};
  border-radius: 4px;
  height: 50px;
  margin-bottom: 15px;
`;

const Em = styled.input`
  outline: none;
  font-size: 18px;
  border: none;
  width: 90%;
  margin-top: 14px;
  margin-left: 11px;
`;

const Pswd = styled.div`
  border: ${props =>
    props.focused ? "1px solid #008389" : " 1px solid #ebebeb;"};
  border-radius: 4px;
  height: 50px;
  margin-bottom: 15px;
`;

const LoginOn = styled.div`
  padding: 6px;
  margin-top: 32px;
  &:active {
    border: 1px solid #717171;
    border-radius: 7px;
  }
`;

const LgButton = styled.button`
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 800;
  padding-left: 22px;
  padding-right: 22px;
  min-width: 71.1935px;
  box-shadow: none;
  color: rgb(255, 255, 255);
  margin: 0px;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  background: rgb(255, 90, 95);
  border-color: transparent;
  outline: none;
`;

const LgLines = styled.div`
  margin-top: 16px;
`;

const LginLine = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ebebeb;
`;

function Login() {
  const [focused, setFocused] = useState(false);
  const [focuse, setFocuse] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleClick = () => {
    axios.post("http://localhost:5000/login", { id, pw: password }).then(
      result => {
        history.push("/");
      },
      err => {
        console.log(err);
      }
    );
  };

  return (
    <div>
      <Logindiv>
        <LoginTable>
          <LoginBox>
            <LogoinPage>
              <Link to="/">
                <LogCloseBt>
                  <AiOutlineClose />
                </LogCloseBt>
              </Link>
              <>
                <FbBt>페이스북 계정으로 로그인</FbBt>
              </>
              <>
                <GlBt>구글로 계정 로그인</GlBt>
              </>
              <LgOr>
                <LgLine>
                  <LgName>또는</LgName>
                </LgLine>
              </LgOr>
              <Email
                focused={focused}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              >
                <Em
                  placeholder="이메일 주소"
                  type="email"
                  value={id}
                  onChange={e => setId(e.target.value)}
                />
                <GoMail />
              </Email>
              <Pswd
                focused={focuse}
                onFocus={() => setFocuse(true)}
                onBlur={() => setFocuse(false)}
              >
                <Em
                  placeholder="비밀번호"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <FiLock />
              </Pswd>
              <LoginOn>
                <LgButton onClick={handleClick}>로그인</LgButton>
              </LoginOn>
              <LgLines>
                <LginLine />
              </LgLines>
            </LogoinPage>
          </LoginBox>
        </LoginTable>
      </Logindiv>
    </div>
  );
}

export default Login;
