import React from "react";

import {
  ImageWrapper,
  Wrapper,
  CenterLinks,
  FilledButton,
  PlainButton,
} from "./styles";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../../assets/KoBoTreE.svg";

function Nav() {
  return (
    <Wrapper>
      <Container>
        <div className="d-flex justify-content-between">
          <div>
            <Link to="/">
              <ImageWrapper>
                <img src={Logo} alt="" />
              </ImageWrapper>
            </Link>
          </div>
          <div>
            <Link to="/howitworks">
              <CenterLinks>HOW IT WORKS</CenterLinks>
            </Link>
            <Link to="/about">
              <CenterLinks>ABOUT US</CenterLinks>
            </Link>
            <Link to="/faq">
              <CenterLinks>FAQS</CenterLinks>
            </Link>
          </div>
          <div>
            <Link to="/login">
              <PlainButton>Log In</PlainButton>
            </Link>
            <Link to="/signup">
              <FilledButton>Sign Up</FilledButton>
            </Link>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Nav;
