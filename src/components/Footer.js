import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";
import homepagebg4 from "../assets/homepagebg4.svg";
import requestdemobutton from "../assets/requestdemobutton.svg";
import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <div>
        <div
          className="d-none d-lg-block"
          style={{
            position: "absolute",
            zIndex: -1,
            left: 0,
            width: "100%",
            marginTop: -100,
          }}
        >
          <img src={homepagebg4} style={{ width: "100%" }} />
        </div>
        <Container
          fluid
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            gap: 50,
            marginBottom: 100,
          }}
        >
          <Row>
            <Col>
              <h1>See CloneAuditor in action?</h1>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col sm={5}>
              Get familiar with the CloneAuditor Influencer Marketing Platform
              by exploring it with our sales manager.
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={requestdemobutton} />
            </Col>
          </Row>
        </Container>
      </div>
      <Row className="footer">
        <Col sm className="footer_c">
          <text className="footer-textHeader">NEED MORE INFO?</text>
          <Button style={{ background: "rgba(0, 41, 71, 1)" }}>
            REQUEST LIVE DEMO
          </Button>
        </Col>

        <Col sm className="footer_c">
          <text className="footer-textHeader">PLATFORM</text>
          <Link to={"influenceranalytics"} className="footer-textItem">
            Influencer Analytics
          </Link>
          <Link to={"influencerdiscovery"} className="footer-textItem">
            Influencer Discovery
          </Link>
          <Link to={"campaignmanagement"} className="footer-textItem">
            Campaign Management
          </Link>
          <Link to={"marketanalysis"} className="footer-textItem">
            Market Analysis
          </Link>
        </Col>

        <Col sm className="footer_c">
          <text className="footer-textHeader">COMPANY</text>
          <Link to={"technology"} className="footer-textItem">
            Technology
          </Link>
          {/* <text className="footer-textItem">Technology</text> */}
          <Link to={"press"} className="footer-textItem">
            Press
          </Link>
          {/* <text className="footer-textItem">Customers</text> */}
          <Link to={"customers"} className="footer-textItem">
            Customers
          </Link>
          <Link to={"affiliate"} className="footer-textItem">
            Affiliate
          </Link>
          <Link to={"becomeapartner"} className="footer-textItem">
            Become a Partner
          </Link>
        </Col>

        <Col sm className="footer_c">
          <text className="footer-textHeader">RESOURCES</text>
          <Link to={"blog"} className="footer-textItem">
            Blog
          </Link>
          {/* <text className="footer-textItem">Blog</text> */}
          {/* <text className="footer-textItem">FAQ</text> */}
          <Link to={"customerdashboard"} className="footer-textItem">
            FAQ
          </Link>
          <Link to={"freetools"} className="footer-textItem">
            Free Tools
          </Link>
          {/* <text className="footer-textItem">Customer Stories</text> */}
          <Link to={"customerstories"} className="footer-textItem">
            Customer Stories
          </Link>
          <text className="footer-textItem">Industry Insights</text>
          <text className="footer-textItem">CloneAuditor Academy</text>
        </Col>

        <Col sm className="footer_c">
          <text className="footer-textHeader">GET STARTED</text>
          <text className="footer-textItem">Create Account</text>
          <Link to={"contactus"} className="footer-textItem">
            Contact us
          </Link>
          <text className="footer-textItem">Request demo</text>
          <text className="footer-textItem">Support</text>
          <text className="footer-textItem">Migrate to CloneAuditor</text>
        </Col>
      </Row>

      <Row className="footer_b">
        <Col sm="auto" className="footer-b-textItem">
          Terms
        </Col>
        <Col sm="auto" className="footer-b-textItem">
          Privacy
        </Col>
        <Col sm="auto" className="footer-b-textItem">
          Reports Catalouge
        </Col>
        <Col sm="auto" className="footer-b-textItem">
          Ranking Instagram
        </Col>
        <Col sm="auto" className="footer-b-textItem">
          Ranking Youtube
        </Col>
        <Col sm="auto" className="footer-b-textItem">
          Categories
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
