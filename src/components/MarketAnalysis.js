import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import StyledButton1 from "./StyledButton1";
import image2 from "../assets/marketanalysis/image2.svg";
import arrow from "../assets/arrow.svg";
import frame1 from "../assets/marketanalysis/frame1.svg";
import frame2 from "../assets/marketanalysis/frame2.svg";
import image1 from "../assets/marketanalysis/image1.svg";
import balancescale from "../assets/marketanalysis/balancescale.svg";
import brandlogos from "../assets/brandlogos.svg";
import competitoranalysis from "../assets/marketanalysis/competitoranalysis.svg";
import marketanalysis from "../assets/marketanalysis/marketanalysis.svg";
import analysis from "../assets/marketanalysis/analysis.svg";
import Slider from "react-slick";

const MarketAnalysis = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
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
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div
          style={{
            backgroundColor: "white",
            alignItems: "flex-start",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            border: "3px solid rgba(0, 41, 71, 0.1)",
            borderRadius: 17,
            width: "100%",
            maxWidth: 350,
            gap: 20,
            padding: 40,
          }}
        >
          <img src={analysis} />
          <h3>{value}</h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <text style={{ fontSize: 14, color: "rgba(0, 0, 0, 0.46)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              aenean a nulla eget et ornare.{" "}
            </text>

            <text style={{ fontSize: 14, color: "rgba(0, 0, 0, 0.46)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              aenean a nulla eget et ornare.{" "}
            </text>

            <text style={{ fontSize: 14, color: "rgba(0, 0, 0, 0.46)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              aenean a nulla eget et ornare.{" "}
            </text>
          </div>

          <button
            style={{
              backgroundColor: "rgba(0, 41, 71, 1)",
              color: "white",
              width: "100%",
              maxWidth: 200,
              height: 40,
              borderRadius: 6,
              alignSelf: "center",
              marginTop: 15,
            }}
          >
            Try Now
          </button>
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
          <h2>IN-HOUSE AI-POWERED INTELLIGENT INTEGRATED </h2>
          <h1>Market Analysis Toolkit</h1>
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
            <StyledButton1 title="REQUEST DEMO" />
          </Col>
        </Row>
      </Container>

      <Container>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
            gap: 10,
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
          <Col lg={10}>
            <img src={image1} style={{ width: "100%" }} />
          </Col>
        </div>
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
            <img src={image2} style={{ width: "100%" }} />
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
            <img src={image2} style={{ width: "100%" }} />
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
            <img src={image2} style={{ width: "100%" }} />
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
        <Col
          md={10}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 100,
            alignSelf: "center",
          }}
        >
          <img src={brandlogos} style={{ width: "100%" }} />
        </Col>
      </Container>

      <Container fluid>
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
              width: window.innerWidth - 29,
            }}
          />
        </div>
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

          <Container>
            <Slider {...settings}>
              {["Marketing", "Strategy", "Research"].map((v, i) => {
                return <AnalyseAccountComponent key={i} value={v} />;
              })}
            </Slider>
          </Container>
        </Row>
      </Container>

      <Container>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
            gap: 50,
          }}
        >
          <div
            style={{
              background: "rgba(76, 117, 242, 0.08)",
              borderRadius: 70,
              padding: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 120,
            }}
          >
            <img
              src={balancescale}
              style={{
                width: 70,
              }}
            />
          </div>
          <h2>
            Intelligent Competitor{" "}
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "red",
                textUnderlineOffset: "8px",
              }}
            >
              Analysis
            </span>
          </h2>
          <Button
            style={{
              background: "#002947",
              paddingInline: 50,
              marginBottom: 50,
            }}
          >
            Learn More
          </Button>
          <Col lg={10}>
            <img src={competitoranalysis} style={{ width: "100%" }} />
          </Col>
        </div>

        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
            gap: 50,
          }}
        >
          <div
            style={{
              background: "rgba(76, 117, 242, 0.08)",
              borderRadius: 70,
              padding: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 120,
            }}
          >
            <img
              src={balancescale}
              style={{
                width: 70,
              }}
            />
          </div>
          <h2>
            Influencer Marketing Trends{" "}
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "red",
                textUnderlineOffset: "8px",
              }}
            >
              Analysis
            </span>
          </h2>

          <Button
            style={{
              background: "#002947",
              paddingInline: 50,
              marginBottom: 50,
            }}
          >
            Learn More
          </Button>
          <Col lg={10}>
            <img src={marketanalysis} style={{ width: "100%" }} />
          </Col>
        </div>
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
            <img src={image2} style={{ width: "100%" }} />
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
            <img src={image2} style={{ width: "100%" }} />
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
      </Container>
    </div>
  );
};

export default MarketAnalysis;
