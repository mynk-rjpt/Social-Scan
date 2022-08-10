import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image2 from "../assets/affiliate/image2.svg";
import frame1 from "../assets/marketanalysis/frame1.svg";
import frame2 from "../assets/affiliate/frame2.svg";
import image1 from "../assets/affiliate/image1.svg";
import profile from "../assets/affiliate/profile.svg";
import announcement from "../assets/affiliate/announcement.svg";
import money from "../assets/affiliate/money.svg";
import frame3 from "../assets/affiliate/frame3.svg";
import Slider from "react-slick";

const Affiliate = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const AnalyseAccountComponent = ({ value }) => {
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "relative",
            top: 2,
            background: "rgba(255, 184, 186, 1)",
            height: 6,
            width: 320,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            height: 300,
            background: "white",
            border: "3px solid rgba(0, 41, 71, 0.1)",
            borderRadius: 15,
            alignItems: "center",
            flexDirection: "column",
            paddingInline: 20,
            maxWidth: 350,
          }}
        >
          <text
            style={{
              color: "rgba(255, 98, 102, 1)",
              fontSize: 36,
              fontWeight: "bold",
            }}
          >
            20%
          </text>
          <p style={{ color: "rgba(0, 0, 0, 0.46)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            aenean a nulla eget et ornare.{" "}
          </p>
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
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <text>Campaign Management</text>
        <div style={{ gap: 20, display: "flex", gap: 20, flexWrap: "wrap" }}>
          <text>Overview</text>
          <text>Media Plans</text>
          <text>Campaign Management</text>
          <text>Influencer Outreach</text>
          <text>Pricing</text>
          <text style={{ fontWeight: "600" }}>Contact Sales</text>
        </div>
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
            HypeAuditor Affiliate{" "}
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "blue",
                textUnderlineOffset: "10px",
              }}
            >
              Program
            </span>
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
        <Col lg={5} style={{ alignSelf: "center" }}>
          <img src={image1} style={{ width: "100%" }} />
        </Col>
      </Container>

      <Container
        style={{
          marginBottom: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: -1,
            }}
          >
            <img
              className="d-none d-lg-block"
              src={frame2}
              style={{
                width: window.innerWidth - 17,
              }}
            />
          </div>
        </div>
        <Row
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
            gap: 50,
          }}
        >
          <Col
            md={6}
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <h1>
              Affiliate{" "}
              <span
                style={{
                  textDecorationLine: "underline",
                  textDecorationStyle: "wavy",
                  textDecorationColor: "blue",
                  textUnderlineOffset: "10px",
                }}
              >
                Program
              </span>
            </h1>
            <p
              style={{
                color: "rgba(0, 41, 71, 0.59)",
                fontWeight: "bold",
                width: "70%",
              }}
            >
              Search for Instagram, YouTube and TikTok influencers profiles
              across the 23M+ database. Apply a set of filters to discover the
              perfect influencer match for your brand.
            </p>
            <Button
              style={{ background: "rgba(0, 41, 71, 1)", paddingInline: 30 }}
            >
              JOIN NOW
            </Button>
          </Col>
          <Col md={5} style={{ justifyContent: "center" }}>
            <img src={image2} style={{ maxWidth: "90%" }} />
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ marginBottom: 100 }}>
        <Row
          style={{
            gap: 30,
            marginBottom: 100,
            justifyContent: "center",
          }}
        >
          <Row
            style={{
              textAlign: "center",
            }}
          >
            <h1>
              Vitae turpis maecenas in a{" "}
              <span
                style={{
                  textDecorationLine: "underline",
                  textDecorationStyle: "wavy",
                  textDecorationColor: "red",
                  textUnderlineOffset: "10px",
                }}
              >
                et aliquet.
              </span>
            </h1>
          </Row>
          <Row
            style={{
              justifyContent: "center",
              textAlign: "center",
              color: "rgba(0, 0, 0, 0.46)",
            }}
          >
            <Col md={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              aenean a nulla eget et ornare.
            </Col>
          </Row>
        </Row>
        <Container>
          <Slider {...settings}>
            {[0, 1, 2].map((v, i) => {
              return <AnalyseAccountComponent key={i} value={v} />;
            })}
          </Slider>
        </Container>
      </Container>

      <Container
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
          marginBottom: 50,
        }}
      >
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
              width: window.innerWidth - 17,
            }}
          />
        </div>
        <h1>
          How does H
          <span
            style={{
              textDecorationLine: "underline",
              textDecorationStyle: "wavy",
              textDecorationColor: "red",
              textUnderlineOffset: "8px",
            }}
          >
            ypeAudit
          </span>
          or affiliate program work?
        </h1>
        <Col md={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus aenean
          a nulla eget et ornare.{" "}
        </Col>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            gap: 100,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 250 }}>
            <img src={profile} style={{ marginBottom: 20 }} />
            <p style={{ color: "rgba(0, 0, 0, 0.46)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              aenean a nulla eget et ornare.{" "}
            </p>
          </div>
          <div style={{ width: 250 }}>
            <img src={announcement} style={{ marginBottom: 20 }} />
            <p style={{ color: "rgba(0, 0, 0, 0.46)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              aenean a nulla eget et ornare.{" "}
            </p>
          </div>
          <div style={{ width: 250 }}>
            <img src={money} style={{ marginBottom: 20 }} />
            <p style={{ color: "rgba(0, 0, 0, 0.46)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              aenean a nulla eget et ornare.{" "}
            </p>
          </div>
          <div style={{ width: 250 }}>
            <img src={announcement} style={{ marginBottom: 20 }} />
            <p style={{ color: "rgba(0, 0, 0, 0.46)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              aenean a nulla eget et ornare.{" "}
            </p>
          </div>
        </div>
        <Button style={{ background: "rgba(0, 41, 71, 1)", paddingInline: 30 }}>
          JOIN NOW
        </Button>
      </Container>
    </div>
  );
};

export default Affiliate;
