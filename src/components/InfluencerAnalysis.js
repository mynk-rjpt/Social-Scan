import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import tick from "../assets/tick.svg";
import arrow from "../assets/arrow.svg";
import image1 from "../assets/influenceranalysis/image1.svg";
import brain from "../assets/influenceranalysis/brain.svg";
import instagram from "../assets/influenceranalysis/instagram.svg";
import instagramanalysis from "../assets/influenceranalysis/instagramanalysis.svg";
import youtube from "../assets/influenceranalysis/youtube.svg";
import youtubeanalysis from "../assets/influenceranalysis/youtubeanalysis.svg";
import tiktok from "../assets/influenceranalysis/tiktok.svg";
import tiktokanalysis from "../assets/influenceranalysis/tiktokanalysis.svg";
import twitch from "../assets/influenceranalysis/twitch.svg";
import twitchanalysis from "../assets/influenceranalysis/twitchanalysis.svg";
import emoji from "../assets/influenceranalysis/emoji.svg";
import arrow3d from "../assets/influenceranalysis/arrow3d.svg";
import analyticsreport1 from "../assets/influenceranalysis/analyticsreport1.svg";
import analyticsreport2 from "../assets/influenceranalysis/analyticsreport2.svg";
import analyticsreport3 from "../assets/influenceranalysis/analyticsreport3.svg";
import homepagebg2 from "../assets/homepagebg2.svg";
import brandlogos from "../assets/brandlogos.svg";
import Slider from "react-slick";

const InfluencerAnalysis = () => {
  const settings1 = {
    infinite: true,
    centerPadding: "0px",
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
          dots: true,
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

  const CardView = () => {
    return (
      <div
        style={{
          paddingInline: 10,
          paddingBlock: 100,
          backgroundImage:
            "radial-gradient(circle, rgba(236, 249, 255, 1), white )",
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
            maxWidth: 335,
          }}
        >
          <img src={brain} style={{ width: 45 }} />
          <text
            style={{
              width: "60%",
              color: "rgba(0, 41, 71, 0.59)",
              fontWeight: "700",
            }}
          >
            Based on open data and AI technologies
          </text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              alignSelf: "start",
            }}
          >
            <text style={{ fontWeight: "bold" }}>TRY IT NOW</text>
            <img src={arrow} style={{ width: 50 }} />
          </div>
        </div>
      </div>
    );
  };

  const Basicinfoandcontacts = () => {
    return (
      <div
        style={{
          maxWidth: 250,
          padding: 10,
          textAlign: "center",
        }}
      >
        <h6>BASIC INFO & CONTACTS</h6>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignSelf: "start",
            marginBlock: 20,
          }}
        >
          <text style={{ fontWeight: "bold" }}>TRY IT NOW</text>
          <img src={arrow} style={{ width: 50 }} />
        </div>
      </div>
    );
  };

  const AnalysisComponent = ({ txt, img1, img2 }) => {
    return (
      <Row
        style={{
          textAlign: "center",
          justifyContent: "center",
          gap: 20,
          backgroundImage:
            "radial-gradient(circle, rgba(236, 249, 255, 1), white)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            position: "absolute",
            gap: 200,
          }}
        >
          <img src={emoji} />
          <img src={arrow3d} />
        </div>
        <img src={img1} style={{ width: 130, height: 130 }} />
        <h2>{txt} Account Analysis</h2>
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={6}
            style={{
              color: "rgba(0, 41, 71, 0.59)",
              fontWeight: "700",
            }}
          >
            Analyze Instagram influencers with over 35 valuable metrics like
            engagement rate, follower growth, and comments authenticity. Avoid
            fake influencers and partner only with authentic Instagram creators.
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col
            sm="auto"
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
            }}
          >
            <img src={tick} />
            <text>Lorem ipsum dolor sit amet</text>
          </Col>
          <Col
            sm="auto"
            style={{ display: "flex", gap: 10, justifyContent: "center" }}
          >
            <img src={tick} />
            <text>Lorem ipsum dolor sit amet</text>
          </Col>
          <Col
            sm="auto"
            style={{ display: "flex", gap: 10, justifyContent: "center" }}
          >
            <img src={tick} />
            <text>Lorem ipsum dolor sit amet</text>
          </Col>
        </Row>
        <Button style={{ background: "#002947", width: 210 }}>
          Learn More
        </Button>
        <img
          src={img2}
          style={{ width: "100%", maxWidth: 1100, marginBlock: 100 }}
        />
        <div
          style={{
            marginBottom: 100,
          }}
        >
          <Slider {...settings1}>
            {[0, 1, 2].map((v, i) => {
              return <Basicinfoandcontacts key={i} />;
            })}
          </Slider>
        </div>
      </Row>
    );
  };

  return (
    <Container fluid>
      <Container
        style={{
          display: "flex",
          marginBottom: 150,
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <text>Overview</text>
        <text>Instagram</text>
        <text>YouTube</text>
        <text>Tiktok</text>
        <text>Twitch</text>
        <text>Account</text>
        <text>Tracking</text>
        <text>Comparison</text>
        <text style={{ fontWeight: "600" }}>Contact Sales</text>
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
        <div
          className="d-none d-lg-block"
          style={{
            position: "absolute",
            top: -50,
            left: -50,
            width: "80%",
            height: 550,
            backgroundImage:
              "radial-gradient(circle, rgba(236, 249, 255, 1) , transparent 60%)",
            zIndex: -1,
          }}
        />
        <div
          className="d-none d-lg-block"
          style={{
            position: "absolute",
            zIndex: -2,
          }}
        >
          <img src={homepagebg2} style={{ width: "100%" }} />
        </div>
        <h4
          style={{
            paddingBottom: 10,
            borderBottom: "4px solid rgba(255, 40, 40, 1)",
          }}
        >
          INDEPTH INFLUENCER ANALYSIS
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
        <Row>
          <Col sm style={{ display: "flex", gap: 10 }}>
            <img src={tick} />
            <text>Lorem ipsum dolor sit amet</text>
          </Col>
          <Col sm style={{ display: "flex", gap: 10 }}>
            <img src={tick} />
            <text>Lorem ipsum dolor sit amet</text>
          </Col>
          <Col sm style={{ display: "flex", gap: 10 }}>
            <img src={tick} />
            <text>Lorem ipsum dolor sit amet</text>
          </Col>
        </Row>
      </Container>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={image1} style={{ width: "100%", maxWidth: 1000 }} />
      </div>

      <Container style={{ marginBottom: 20 }}>
        <Slider {...settings1}>
          {[0, 1, 2].map((v, i) => {
            return <CardView key={i} />;
          })}
        </Slider>
      </Container>

      <Container>
        <AnalysisComponent
          txt="Instagram"
          img1={instagram}
          img2={instagramanalysis}
        />
        <AnalysisComponent
          txt="Youtube"
          img1={youtube}
          img2={youtubeanalysis}
        />
        <AnalysisComponent txt="TikTok" img1={tiktok} img2={tiktokanalysis} />
        <AnalysisComponent txt="Twitch" img1={twitch} img2={twitchanalysis} />
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
              Explore key features of our influencer analytics reports
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
          <Col
            sm={5}
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(236, 249, 255, 1), white)",
            }}
          >
            <img src={analyticsreport1} style={{ width: "100%" }} />
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
            }}
          >
            <img src={analyticsreport2} style={{ width: "100%" }} />
          </Col>
          <Col
            sm={5}
            style={{
              flexDirection: "column",
              gap: 20,
            }}
          >
            <text style={{ color: "rgba(255, 98, 102, 1)" }}>
              Accurate Audience Demographics
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
          <Col
            sm={5}
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(236, 249, 255, 1), white)",
            }}
          >
            <img src={analyticsreport3} style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={brandlogos} style={{ width: "100%" }} />
        </Row>
      </Container>
    </Container>
  );
};

export default InfluencerAnalysis;
