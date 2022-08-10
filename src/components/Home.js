import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import "./Home.css";
import youtubeimg from "../assets/youtube.svg";
import mrbeastimg from "../assets/youtubemrbeast.svg";
import campaignmanagementimg from "../assets/campaignmanagement.svg";
import reporthubimg from "../assets/reporthub.svg";
import brandlogos from "../assets/brandlogos.svg";
import arrow from "../assets/arrow.svg";
import tick from "../assets/tick.svg";
import analysis from "../assets/analysis.svg";
import homepageTop from "../assets/homepageTop.svg";
import search from "../assets/search.svg";
import background1 from "../assets/background1.svg";
import homepagebg2 from "../assets/homepagebg2.svg";
import examplereportbg from "../assets/examplereportbg.svg";
import analyticalreportsbg from "../assets/analyticalreportsbg.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [ExampleReportIndex, setExampleReportIndex] = useState(0);
  const [AnalyzeAccountIndex, setAnalyzeAccountIndex] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const settings1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (current, next) => setExampleReportIndex(next),
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

  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (current, next) => setAnalyzeAccountIndex(next),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
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

  const ExampleReportsComponent = ({ index }) => {
    return (
      <div
        className={index === ExampleReportIndex ? "slide activeSlide" : "slide"}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 400,
            height: 400,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            border: "4px solid rgba(0, 41, 71, 0.1)",
            borderRadius: 17,
          }}
        >
          <img src={youtubeimg} style={{ marginBottom: 25 }} />
          <img src={mrbeastimg} style={{ marginBottom: 15 }} />
          <h4>Mr. Beast</h4>
          <h6>@mr.beast</h6>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ marginBottom: 13 }}>CQS</text>
              <text style={{ textAlign: "center" }}>58</text>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ marginBottom: 13 }}>Subscribers</text>
              <text style={{ textAlign: "center" }}>89M</text>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text style={{ marginBottom: 13 }}>Avg. views</text>
              <text style={{ textAlign: "center" }}>45M</text>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AnalyseAccountComponent = ({ index }) => {
    return (
      <div
        className={
          index === AnalyzeAccountIndex ? "slide activeSlide" : "slide"
        }
        style={{ justifyContent: "center", display: "flex" }}
      >
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
          <h3>Analyze Accounts</h3>
          <text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            aenean a nulla eget et ornare.{" "}
          </text>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 10 }}>
              <img src={tick} style={{ flex: 1 }} />
              <text style={{ flex: 9 }}>Lorem ipsum dolor sit amet</text>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <img src={tick} style={{ flex: 1 }} />
              <text style={{ flex: 9 }}>Lorem ipsum dolor sit amet</text>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <img src={tick} style={{ flex: 1 }} />
              <text style={{ flex: 9 }}>Lorem ipsum dolor sit amet</text>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <img src={tick} style={{ flex: 1 }} />
              <text style={{ flex: 9 }}>Lorem ipsum dolor sit amet</text>
            </div>
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
            Get Started
          </button>
        </div>
      </div>
    );
  };

  return (
    <Container fluid>
      {/* <h1>{data.id}</h1>
      <h1>{data.firstName}</h1>
      <h1>{data.lastName}</h1> */}

      {/* Body */}

      <Container fluid>
        <Row
          className="justify-content-lg-around"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 30,
            paddingTop: 120,
            marginTop: -100,
            marginBottom: 50,
          }}
        >
          <img
            src={background1}
            style={{ position: "absolute", left: -100, top: -200, zIndex: -1 }}
          />
          <Col
            md={5}
            sm={1}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 30,
            }}
          >
            <Row>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit usya 😃
              </h1>
            </Row>
            <Row style={{ color: "rgba(0, 0, 0, 0.46)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus at
              facilisi magna neque, platea in. Orci phasellus turpis risus mi.
            </Row>
            <Row style={{ gap: 20 }}>
              <Col
                style={{
                  display: "flex",
                  flex: 4,
                  border: "2px solid rgba(0, 41, 71, 0.55)",
                  borderRadius: 7,
                  padding: 10,
                  background: "white",
                }}
              >
                <input
                  placeholder="Analyze any Influencer..."
                  style={{ border: "none", flex: 1, width: "100%" }}
                />
                <img src={search} />
              </Col>
              <Col style={{ flex: 1 }}>
                <button
                  style={{
                    backgroundColor: "rgba(0, 41, 71, 1)",
                    color: "white",
                    width: 120,
                    height: 44,
                    borderRadius: 7,
                  }}
                >
                  Get Started
                </button>
              </Col>
            </Row>
          </Col>
          <Col sm md={5}>
            <img src={homepageTop} style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{
          backgroundImage: `url(${analyticalreportsbg})`,
          backgroundPositionX: 120,
          backgroundPositionY: 20,
        }}
      >
        <Row
          style={{
            gap: 30,
            marginBottom: 100,
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

          <Slider {...settings2}>
            {[0, 1, 2, 3].map((v, i) => {
              return <AnalyseAccountComponent key={i} index={i} />;
            })}
          </Slider>
        </Row>
      </Container>

      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 35,
          marginBottom: 50,
        }}
      >
        <Row style={{ position: "absolute", zIndex: -1 }}>
          <Col className="d-none d-sm-block">
            <img src={homepagebg2} style={{ width: "100%" }} />
          </Col>
        </Row>

        <h4
          style={{
            paddingBottom: 10,
            borderBottom: "4px solid rgba(255, 40, 40, 1)",
          }}
        >
          ANALYTICAL REPORTS
        </h4>
        <Row className="justify-content-center">
          <Col md={9}>
            <h1 style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              praesent volutpat.
            </h1>
          </Col>
        </Row>
        <Row style={{ width: "100%", margin: 30, justifyContent: "center" }}>
          <Col md={6} style={{ display: "flex" }}>
            <input
              placeholder="Enter Instagram, YouTube or TikTok account ..."
              style={{
                flex: 3,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                padding: 10,
                marginRight: -1,
              }}
            />
            <button
              style={{
                flex: 1,
                backgroundColor: "rgba(0, 41, 71, 1)",
                color: "white",
                padding: 20,
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
              }}
            >
              CHECK
            </button>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ paddingBottom: 150 }}>
        <div
          style={{
            zIndex: -1,
            display: "flex",
            width: "100%",
            flex: 1,
            position: "absolute",
            left: -50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={examplereportbg}
            style={{
              maxWidth: 400,
              width: "100%",
              position: "relative",
              top: 300,
            }}
          />
          <img
            src={background1}
            style={{ width: "100%", position: "absolute", zIndex: -1 }}
          />
        </div>

        <Row
          style={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 50,
            gap: 5,
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            Exa
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "rgba(76, 0, 242, 1)",
                textUnderlineOffset: "10px",
              }}
            >
              mple Repo
            </span>
            rts
          </h1>
        </Row>

        <Slider {...settings1}>
          {[0, 1, 2, 3, 4, 5].map((v, i) => {
            return <ExampleReportsComponent key={i} index={i} />;
          })}
        </Slider>
      </Container>

      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 100,
          marginBottom: 100,
        }}
      >
        <Row style={{ justifyContent: "center" }}>
          <Col md={8}>
            <h1
              style={{
                textAlign: "center",
                marginBottom: -40,
              }}
            >
              Use CloneAuditor on every step of Influencer marketing workflow &
              analytics:
            </h1>
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
              DISCOVERY HUB
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempor est vestibulum imperdiet accumsan adipiscing sit. Ac
              hendrerit fames sit dui ornare vel tellus, ac.
            </Row>
            <Row>
              <Col sm="auto">Learn more about discovery hub</Col>
              <Col>
                <img src={arrow} />
              </Col>
            </Row>
          </Col>
          <Col sm={5}>
            <img src={campaignmanagementimg} style={{ width: "100%" }} />
          </Col>
        </Row>

        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 60,
          }}
        >
          <Col sm={5}>
            <img src={reporthubimg} style={{ width: "100%" }} />
          </Col>
          <Col
            sm={5}
            style={{
              flexDirection: "column",
              gap: 20,
            }}
          >
            <text style={{ color: "rgba(255, 98, 102, 1)" }}>REPORT HUB</text>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempor est vestibulum imperdiet accumsan adipiscing sit. Ac
              hendrerit fames sit dui ornare vel tellus, ac.
            </Row>
            <Row>
              <Col sm="auto">Learn more about report hub</Col>
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
              CAMPAIGN MANAGEMENT
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempor est vestibulum imperdiet accumsan adipiscing sit. Ac
              hendrerit fames sit dui ornare vel tellus, ac.
            </Row>
            <Row>
              <Col sm="auto">Learn more about campaign management</Col>
              <Col>
                <img src={arrow} />
              </Col>
            </Row>
          </Col>
          <Col sm={5}>
            <img src={campaignmanagementimg} style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 100,
        }}
      >
        <img src={brandlogos} style={{ width: "100%" }} />
      </Row>
    </Container>
  );
};

export default Home;
