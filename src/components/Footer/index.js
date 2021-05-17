import React from "react";

import {
  Wrapper,
  LeftSection,
  RightSection,
  Location,
  ContactUs,
} from "./styles";

import { Container } from "react-bootstrap";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

import Logo from "../../assets/KoBoTreE-w.svg";

function Footer() {
  const footerStyles = {
    color: "#fff",
    fontSize: "1.2rem",
  };

  return (
    <Wrapper>
      <Container>
        <div className="d-flex justify-content-between">
          <LeftSection>
            <img src={Logo} alt="" className="pb-4" />
            <Location>32, Heywhy address, 39th floor,</Location>
            <Location>Washington, DC 20036</Location>
            <ContactUs>Contact us</ContactUs>
            <GrLinkedinOption style={footerStyles} />
            <FaFacebookF style={footerStyles} className="ml-2" />
            <ImInstagram style={footerStyles} className="ml-2" />
          </LeftSection>
          <RightSection>
            <h1>RightSection</h1>
          </RightSection>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Footer;
