import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import StyledButton1 from "./StyledButton1";
import image1 from "../assets/influencerdiscovery/image1.svg";
import arrow from "../assets/arrow.svg";
import frame1 from "../assets/influencerdiscovery/Frame1.svg";
import frame2 from "../assets/influencerdiscovery/Frame2.svg";
import brain from "../assets/influenceranalysis/brain.svg";
import addpeople from "../assets/influencerdiscovery/addpeople.svg";
import search from "../assets/influencerdiscovery/search.svg";
import clipboard from "../assets/influencerdiscovery/clipboard.svg";

const InfluencerDiscovery = () => {
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
          <img src={img} style={{ width: 35 }} />
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
          top: -250,
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
          marginBottom: 150,
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <text>Influencer Discovery</text>
        <text>Overview</text>
        <text>Instagram Discovery</text>
        <text>YouTube Discovery</text>
        <text>Tiktok Discovery</text>
        <text>Twitch Discovery</text>
        <text>Pricing</text>
        <text style={{ fontWeight: "600" }}>Contact Sales</text>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: 30,
          marginBottom: 100,
        }}
      >
        <Col md={8} style={{ alignSelf: "center" }}>
          <h1>
            Find the Right Influencers in the Profile{" "}
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "red",
                textUnderlineOffset: "5px",
              }}
            >
              Database
            </span>{" "}
            of 23M+
          </h1>
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

        <Row
          style={{ justifyContent: "center", gap: 50, alignItems: "center" }}
        >
          <Col
            md="auto"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StyledButton1 title={"TRY IT NOW"} />
          </Col>
          <Col
            md="auto"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StyledButton1 title="REQUEST DEMO" />
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 50,
        }}
      >
        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 60,
          }}
        >
          <Col
            sm={5}
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(236, 249, 255, 1), white)",
              padding: 50,
            }}
          >
            <img src={image1} style={{ width: "100%" }} />
          </Col>
          <Col
            sm={5}
            style={{
              flexDirection: "column",
              gap: 20,
            }}
          >
            <text style={{ color: "rgba(255, 98, 102, 1)" }}>
              Influencer Location and Contact Details
            </text>

            <h2>
              Lorem ipsum dolor sit amet, ohio dec consectetur adipiscing elit.
            </h2>

            <Row
              style={{
                marginTop: 20,
                marginBottom: 20,
                color: "rgba(0, 0, 0, 0.46)",
              }}
            >
              <Col>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tempor est vestibulum imperdiet accumsan adipiscing sit. Ac
                hendrerit fames sit dui ornare vel tellus, ac.
              </Col>
            </Row>
            <Row>
              <Col sm="auto">Learn more about discovery hub</Col>
              <Col>
                <img src={arrow} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 60,
          }}
        >
          <Col
            sm={5}
            style={{
              flexDirection: "column",
              gap: 20,
            }}
          >
            <text style={{ color: "rgba(255, 98, 102, 1)" }}>
              Influencer Location and Contact Details
            </text>

            <h2>
              Lorem ipsum dolor sit amet, ohio dec consectetur adipiscing elit.
            </h2>

            <Row
              style={{
                marginTop: 20,
                marginBottom: 20,
                color: "rgba(0, 0, 0, 0.46)",
              }}
            >
              <Col>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tempor est vestibulum imperdiet accumsan adipiscing sit. Ac
                hendrerit fames sit dui ornare vel tellus, ac.
              </Col>
            </Row>
            <Row>
              <Col sm="auto">Learn more about discovery hub</Col>
              <Col>
                <img src={arrow} />
              </Col>
            </Row>
          </Col>
          <Col
            sm={5}
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(236, 249, 255, 1), white)",
              padding: 50,
            }}
          >
            <img src={image1} style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 60,
          }}
        >
          <Col
            sm={5}
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(236, 249, 255, 1), white)",
              padding: 50,
            }}
          >
            <img src={image1} style={{ width: "100%" }} />
          </Col>
          <Col
            sm={5}
            style={{
              flexDirection: "column",
              gap: 20,
            }}
          >
            <text style={{ color: "rgba(255, 98, 102, 1)" }}>
              Influencer Location and Contact Details
            </text>

            <h2>
              Lorem ipsum dolor sit amet, ohio dec consectetur adipiscing elit.
            </h2>

            <Row
              style={{
                marginTop: 20,
                marginBottom: 20,
                color: "rgba(0, 0, 0, 0.46)",
              }}
            >
              <Col>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tempor est vestibulum imperdiet accumsan adipiscing sit. Ac
                hendrerit fames sit dui ornare vel tellus, ac.
              </Col>
            </Row>
            <Row>
              <Col sm="auto">Learn more about discovery hub</Col>
              <Col>
                <img src={arrow} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Button style={{ background: "#002947", paddingInline: 30 }}>
              GET A FREE DEMO
            </Button>
          </Col>
        </Row>
      </Container>

      <div
        style={{
          // background:
          //   "linear-gradient(90deg, rgba(46,0,178,0.08) 0%, rgba(46,0,178,0.08) 50%, rgba(237,31,36,0.06) 100%)",
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
          <Row
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Col md={5}>
              <h2>
                Lorem ipsum dolor sit amet, ohio dec consectetur adipiscing
                elit.
              </h2>
            </Col>
            <Col md="auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Col>
          </Row>
          <Container style={{ marginBottom: 50 }}>
            <Row style={{ padding: 10 }}>
              <Col sm xxl>
                <CardView img={brain} />
              </Col>
              <Col sm xxl>
                <CardView img={search} />
              </Col>
              <Col md xxl>
                <CardView img={clipboard} />
              </Col>
              <Col xxl={12}>
                <CardView img={addpeople} />
              </Col>
            </Row>
          </Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <Button style={{ background: "#002947", paddingInline: 30 }}>
                TRY IT NOW
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

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

export default InfluencerDiscovery;
