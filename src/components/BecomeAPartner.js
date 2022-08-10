import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import frame1 from "../assets/influencerdiscovery/Frame1.svg";
import frame2 from "../assets/influencerdiscovery/Frame2.svg";
import brain from "../assets/influenceranalysis/brain.svg";
import addpeople from "../assets/influencerdiscovery/addpeople.svg";
import search from "../assets/influencerdiscovery/search.svg";
import clipboard from "../assets/influencerdiscovery/clipboard.svg";
import img1 from "../assets/becomeapartner/img1.svg";

const BecomeAPartner = () => {
  const CardView = ({ img }) => {
    return (
      <div
        style={{
          paddingBlock: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            background: "white",
            boxShadow: "0 4px 7px 0 rgba(0, 0, 0, 0.25)",
            borderRadius: 17,
            padding: 30,
            width: "100%",
          }}
        >
          {img && <img src={img} style={{ width: 35 }} />}
          <text
            style={{
              width: "80%",
              color: "rgba(0, 41, 71, 0.59)",
              fontWeight: "700",
            }}
          >
            Based on open data and AI technologies
          </text>
        </div>
      </div>
    );
  };
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
        <Col md={8} style={{ alignSelf: "center" }}>
          <h1>Partner with HypeAuditor</h1>
        </Col>
        <Row style={{ justifyContent: "center" }}>
          <Col
            sm={8}
            style={{
              color: "rgba(0, 41, 71, 0.59)",
              fontWeight: "700",
            }}
          >
            Search for Instagram, YouTube and TikTok influencers profiles across
            the 23M+ database. Apply a set of filters to discover the perfect
            influencer match for your brand.
          </Col>
        </Row>

        <Col>
          <Button
            style={{ background: "rgba(0, 41, 71, 1)", paddingInline: 20 }}
          >
            APPLY TO JOIN
          </Button>

          <img src={img1} style={{ position: "absolute" }} />
        </Col>
      </Container>

      <div
        style={{
          paddingBlock: 100,
        }}
      >
        <div
          className="d-none d-lg-block"
          style={{
            position: "absolute",
            zIndex: -1,
            marginTop: -90,
            width: "100%",
          }}
        >
          <img
            src={frame2}
            style={{
              objectPosition: "0px -80px",
              width: "100%",
            }}
          />
        </div>
        <Container>
          <Row style={{ padding: 10 }}>
            <Col xxl={4}>
              <CardView img={brain} />
            </Col>
            <Col xxl={4}>
              <CardView img={search} />
            </Col>
            <Col xxl={4}>
              <CardView img={clipboard} />
            </Col>
            <Col xxl={6}>
              <CardView img={search} />
            </Col>
            <Col xxl={6}>
              <CardView img={addpeople} />
            </Col>
          </Row>
        </Container>
      </div>

      <Container style={{ marginBottom: 50 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <h1>Are You a Good Fit?</h1>
          <div style={{ display: "flex" }}>
            <Col>
              <img src={img1} style={{ transform: "scaleX(-1)" }} />
              <Button
                style={{ background: "rgba(0, 41, 71, 1)", paddingInline: 20 }}
              >
                BECOME A PARTNER
              </Button>
            </Col>
          </div>
        </div>
        <Row style={{ padding: 10 }}>
          <Col xxl={4}>
            <CardView />
          </Col>
          <Col xxl={4}>
            <CardView />
          </Col>
          <Col xxl={4}>
            <CardView />
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          background:
            "radial-gradient(circle, rgba(236, 249, 255, 0.79) 1%, rgba(251,251,251,0) 100%)",
          paddingBlock: 50,
          marginBlock: 50,
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Questions & Answers About Influenc
          <span
            style={{
              textDecorationLine: "underline",
              textDecorationStyle: "wavy",
              textDecorationColor: "rgba(76, 0, 242, 1)",
              textUnderlineOffset: "5px",
            }}
          >
            er Search
          </span>
        </h1>
        <Row style={{ gap: 20 }}>
          {[0, 1, 2, 3].map((v, i) => {
            return (
              <Row style={{ justifyContent: "center" }}>
                <Col md={11}>
                  <Dropdown
                    style={{
                      width: "100%",
                      display: "flex",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
                      marginBottom: 15,
                    }}
                  >
                    <text
                      style={{ width: "100%", color: "rgba(0, 0, 0, 0.46)" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam tempor ?
                    </text>
                    <Dropdown.Toggle
                      variant="none"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: "100%" }}></Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BecomeAPartner;
