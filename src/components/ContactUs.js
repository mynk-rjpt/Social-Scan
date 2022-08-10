import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import frame1 from "../assets/contactus/frame1.svg";
import frame2 from "../assets/contactus/frame2.svg";
import analysis from "../assets/contactus/analysis.svg";
import image1 from "../assets/contactus/image1.svg";
import image2 from "../assets/contactus/image2.svg";
import image3 from "../assets/contactus/image3.svg";
import image4 from "../assets/contactus/image4.svg";
import emoji from "../assets/contactus/emoji.svg";
import Slider from "react-slick";

const ContactUs = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
      <div style={{ justifyContent: "center", display: "flex", padding: 10 }}>
        <div
          style={{
            backgroundColor: "white",
            alignItems: "flex-start",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            border: "3px solid rgba(0, 41, 71, 0.1)",
            borderRadius: 17,
            gap: 20,
            padding: 40,
          }}
        >
          <img src={analysis} />
          <h4>{value.title}</h4>
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
            {value.buttonname}
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
          <h1>Contact Us</h1>
        </Col>
        <Row style={{ justifyContent: "center" }}>
          <Col
            sm={10}
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
      </Container>

      <Container fluid style={{ marginBottom: 100 }}>
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

        <Container>
          <Slider {...settings}>
            {[
              { title: "Customer Support", buttonname: "ASK QUESTION" },
              { title: "Request a Demo", buttonname: "REQUEST DEMO" },
              { title: "Sales Enquiry", buttonname: "CONTACT SALES" },
              { title: "Press & Media", buttonname: "VISIT NEWSROOM" },
            ].map((v, i) => {
              return <AnalyseAccountComponent key={i} value={v} />;
            })}
          </Slider>
        </Container>
      </Container>

      <Container style={{ textAlign: "center", marginBottom: 50 }}>
        <img
          className="d-none d-lg-block"
          src={emoji}
          style={{
            position: "absolute",
            background: "rgba(237, 103, 111, 0.08)",
            padding: 5,
            borderRadius: 50,
            fontSize: 24,
            left: window.innerWidth / 4,
          }}
        />
        <h1 style={{ marginBottom: 50 }}>Global Presence</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 30,
          }}
        >
          <div style={{ width: 170, textAlign: "center" }}>
            <img src={image1} />
            <p style={{ color: "rgba(0, 41, 71, 0.59)", fontWeight: "bold" }}>
              NEW YORK 880 3rd Avenue New York, NY
            </p>
          </div>
          <div style={{ width: 170, textAlign: "center" }}>
            <img src={image2} />
            <p style={{ color: "rgba(0, 41, 71, 0.59)", fontWeight: "bold" }}>
              LONDON 51 Eastcheap London, EC3M 1JP, UK
            </p>
          </div>
          <div style={{ width: 170, textAlign: "center" }}>
            <img src={image3} />
            <p style={{ color: "rgba(0, 41, 71, 0.59)", fontWeight: "bold" }}>
              INDIANAPOLIS Worldwide HQ
            </p>
          </div>
          <div style={{ width: 170, textAlign: "center" }}>
            <img src={image4} />
            <p style={{ color: "rgba(0, 41, 71, 0.59)", fontWeight: "bold" }}>
              SAINT-PETERSBURG R&D Office
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
