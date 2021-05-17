import React from "react";
import { IconBox } from "./styles";
import Icon1 from "../../assets/authpageicons/icon1.png";
import Icon2 from "../../assets/authpageicons/icon2.png";
import Icon3 from "../../assets/authpageicons/icon3.png";
import Icon4 from "../../assets/authpageicons/icon4.png";
import { Container, Row, Col } from "react-bootstrap";

function SideBarLayout() {
  return (
    <>
      <Container style={{textAlign: "center", padding:"60px 30px 60px"}}>
        <h5>Welcome to</h5>
        <h1 style={{ fontSize: 40, fontWeight: "bold" }}>KoBoTreE</h1><br /><br />

        <Container style={{ textAlign: "justify" }}>
          <Row>
            <Col xs={2}>
              <IconBox>
                <img src={Icon1} alt="" srcset="" />
              </IconBox>
            </Col>
            <Col>
              <p style={{ fontSize: 18, fontWeight: "bold" }}>
                Safe Investments
              </p>
              <p style={{ fontSize: 13 }}>
                Platform that allows you invest securely, safely with guarantee
                to their investment.
              </p>
            </Col>
          </Row>
        </Container>
        <Container style={{ textAlign: "justify", paddingBottom: 10 }}>
          <Row>
            <Col xs={2}>
              <IconBox>
                <img src={Icon2} alt="" srcset="" />
              </IconBox>
            </Col>
            <Col>
              <p style={{ fontSize: 18, fontWeight: "bold" }}>
                Grow your finances
              </p>
              <p style={{ fontSize: 13 }}>
                Grow your finances and create a robust return on investments for
                that user.
              </p>
            </Col>
          </Row>
        </Container>
        <Container style={{ textAlign: "justify", paddingBottom: 10 }}>
          <Row>
            <Col xs={2}>
              <IconBox>
                <img src={Icon3} alt="" srcset="" />
              </IconBox>
            </Col>
            <Col>
              <p style={{ fontSize: 18, fontWeight: "bold" }}>
                Earn Internationally
              </p>
              <p style={{ fontSize: 13 }}>
                We give a broad range of users the power to invest in USD and
                earn in USD.
              </p>
            </Col>
          </Row>
        </Container>
        <Container style={{ textAlign: "justify", paddingBottom: 10 }}>
          <Row>
            <Col xs={2}>
              <IconBox>
                <img src={Icon4} alt="" srcset="" />
              </IconBox>
            </Col>
            <Col>
              <p style={{ fontSize: 18, fontWeight: "bold" }}>
                High Yeild Returns
              </p>
              <p style={{ fontSize: 13 }}>
                We give a broad range of users the power to invest in USD and
                earn in USD.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default SideBarLayout;
