import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import frame1 from "../assets/pricing/frame1.svg";
import tick from "../assets/tick.svg";
import forbes from "../assets/press/forbes.svg";
import wsj from "../assets/press/wsj.svg";
import tc from "../assets/press/tc.svg";
import esquire from "../assets/press/esquire.svg";
import newspaper from "../assets/press/newspaper.svg";
import frame2 from "../assets/press/frame2.svg";
import frame3 from "../assets/press/frame3.svg";

const Press = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          zIndex: -1,
          top: -350,
          left: -200,
        }}
      >
        <img
          className="d-none d-lg-block"
          src={frame1}
          style={{
            width: "100%",
          }}
        />
      </div>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: 30,
          marginBlock: 100,
        }}
      >
        <Col style={{ alignSelf: "center" }}>
          <h1>People talk about us</h1>
        </Col>
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={8}
            style={{
              color: "rgba(0, 41, 71, 0.59)",
              fontWeight: "700",
            }}
          >
            Press Stories, Video Reviews and Testimonials that tell how
            HypeAuditor helps to deal with the influencer's fraud check problem.
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", gap: 30 }}>
          <Col sm="auto">
            <Button style={{ background: "rgba(0, 41, 71, 1)", width: 175 }}>
              PRESS INQUIRIES
            </Button>
          </Col>
          <Col sm="auto">
            <Button style={{ background: "rgba(0, 41, 71, 1)", width: 175 }}>
              PRESS KIT
            </Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 30,
            marginBottom: 50,
          }}
        >
          <div style={{ width: 170, textAlign: "center" }}>
            <img src={forbes} />
            <p style={{ color: "rgba(0, 41, 71, 0.59)", fontWeight: "bold" }}>
              HypeAuditor can help you identify influencers based on reach,
              demographics and audience."
            </p>
          </div>
          <div style={{ width: 200, textAlign: "center" }}>
            <img src={wsj} />
            <p style={{ color: "rgba(0, 41, 71, 0.59)", fontWeight: "bold" }}>
              HypeAuditor can help you identify influencers based on reach,
              demographics and audience."
            </p>
          </div>
          <div style={{ width: 200, textAlign: "center" }}>
            <img src={tc} />
            <p style={{ color: "rgba(0, 41, 71, 0.59)", fontWeight: "bold" }}>
              HypeAuditor can help you identify influencers based on reach,
              demographics and audience."
            </p>
          </div>
          <div style={{ width: 200, textAlign: "center" }}>
            <img src={esquire} />
            <p style={{ color: "rgba(0, 41, 71, 0.59)", fontWeight: "bold" }}>
              HypeAuditor can help you identify influencers based on reach,
              demographics and audience."
            </p>
          </div>
        </div>
      </Container>

      <Container
        fluid
        style={{
          marginBottom: 50,
          display: "flex",
        }}
      >
        {/* <div
          style={{
            position: "absolute",
            zIndex: -1,
          }}
        >
          <img
            className="d-none d-lg-block"
            src={frame2}
            style={{
              width: window.innerWidth - 29,
            }}
          />
        </div> */}
        <Row style={{ justifyContent: "center" }}>
          <Col
            sm={10}
            style={{ display: "flex", alignSelf: "center", flexWrap: "wrap" }}
          >
            <Col xxl={5}>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <img src={newspaper} />
                <h2>Press inquiries</h2>
              </div>
              <Col md={9} style={{ fontWeight: "bold" }}>
                For all press and media inquiries email anna@hypeauditor.com If
                you are an Influencer looking to collaborate, please fill out
                our inquiry form.
              </Col>
            </Col>

            <Col sm>
              <h2>Press kit</h2>
              <p style={{ fontWeight: "bold" }}>
                For all press and media inquiries email anna@hypeauditor.com If
                you{" "}
              </p>
              <Button style={{ background: "rgba(0, 41, 71, 1)", width: 175 }}>
                PRESS INQUIRIES
              </Button>
            </Col>
            <Col md>
              <h2>Resources</h2>
              <p style={{ fontWeight: "bold" }}>
                For all press and media inquiries email anna@hypeauditor.com If
                you{" "}
              </p>
              <Button style={{ background: "rgba(0, 41, 71, 1)", width: 175 }}>
                PRESS INQUIRIES
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ paddingBlock: 100, alignItems: "center" }}>
        <div
          style={{
            position: "absolute",
            zIndex: -1,
          }}
        >
          <img
            className="d-none d-lg-block"
            src={frame3}
            style={{
              width: window.innerWidth - 29,
            }}
          />
        </div>
        <h1 style={{ textAlign: "center", marginBottom: 50 }}>Latest News</h1>

        <Row style={{ justifyContent: "center" }}>
          <Col sm={10} style={{ display: "flex", flexWrap: "wrap" }}>
            <Col xxl={6}>
              <img src={forbes} />
              <Col xxl={5} style={{ fontWeight: "bold" }}>
                For all press and media inquiries email anna@hypeauditor.com If
                you are an Influencer looking to collaborate, please fill out
                our inquiry form. For all press and media inquiries email
                anna@hypeauditor.com If you are an Influencer looking to
                collaborate, please fill out our inquiry form.
              </Col>
            </Col>

            <Col xxl={6}>
              <img src={forbes} />
              <Col xxl={5} style={{ fontWeight: "bold" }}>
                For all press and media inquiries email anna@hypeauditor.com If
                you are an Influencer looking to collaborate, please fill out
                our inquiry form. For all press and media inquiries email
                anna@hypeauditor.com If you are an Influencer looking to
                collaborate, please fill out our inquiry form.
              </Col>
            </Col>

            <Col xxl={6}>
              <img src={forbes} />
              <Col xxl={5} style={{ fontWeight: "bold" }}>
                For all press and media inquiries email anna@hypeauditor.com If
                you are an Influencer looking to collaborate, please fill out
                our inquiry form. For all press and media inquiries email
                anna@hypeauditor.com If you are an Influencer looking to
                collaborate, please fill out our inquiry form.
              </Col>
            </Col>

            <Col xxl={6}>
              <img src={forbes} />
              <Col xxl={5} style={{ fontWeight: "bold" }}>
                For all press and media inquiries email anna@hypeauditor.com If
                you are an Influencer looking to collaborate, please fill out
                our inquiry form. For all press and media inquiries email
                anna@hypeauditor.com If you are an Influencer looking to
                collaborate, please fill out our inquiry form.
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginBottom: 100 }}>
        <h1 style={{ textAlign: "center", marginBottom: 25 }}>
          Press Releases
        </h1>

        <div
          style={{ display: "flex", justifyContent: "space-around", gap: 20 }}
        >
          <div
            style={{
              border: "1px solid rgba(0, 41, 71, 0.1)",
              borderRadius: 15,
              height: 156,
              width: "100%",
              maxWidth: 412,
            }}
          />
          <div
            style={{
              border: "1px solid rgba(0, 41, 71, 0.1)",
              borderRadius: 15,
              height: 156,
              width: "100%",
              maxWidth: 412,
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Press;
