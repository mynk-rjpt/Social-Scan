import React from "react";
import { Container, Row, Col, Table, Dropdown, Button } from "react-bootstrap";
import frame1 from "../assets/pricing/frame1.svg";
import tick from "../assets/tick.svg";
import brandlogos from "../assets/brandlogos.svg";
import frame2 from "../assets/pricing/frame2.svg";
import Slider from "react-slick";

const Pricing = () => {
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
          <h4>{value.title}</h4>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <text style={{ fontSize: 14, color: "rgba(0, 0, 0, 0.46)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              aenean a nulla eget et ornare.{" "}
            </text>
          </div>

          <h2 style={{ alignSelf: "center" }}>{value.price}</h2>

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginInline: -10,
            }}
          >
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
        <Col style={{ alignSelf: "center" }}>
          <h1>Get access to Industry standard analytical solutions</h1>
        </Col>
        <Row style={{ justifyContent: "center" }}>
          <Col
            style={{
              color: "rgba(0, 41, 71, 0.59)",
              fontWeight: "700",
            }}
          >
            Search for Instagram, YouTube and TikTok influencers profiles across
            the 23M+ database.
          </Col>
        </Row>
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
        <Slider {...settings}>
          {[
            {
              title: "Customer Support",
              buttonname: "ASK QUESTION",
              price: "$ 0 /month",
            },
            {
              title: "Request a Demo",
              buttonname: "REQUEST DEMO",
              price: "$ 399 /month",
            },
            {
              title: "Sales Enquiry",
              buttonname: "CONTACT SALES",
              price: "$  /month",
            },
            {
              title: "Press & Media",
              buttonname: "VISIT NEWSROOM",
              price: "$  /month",
            },
          ].map((v, i) => {
            return <AnalyseAccountComponent key={i} value={v} />;
          })}
        </Slider>
      </Container>

      <Container
        style={{
          background:
            "radial-gradient(circle, rgba(236, 249, 255, 0.79) 1%, rgba(251,251,251,0) 100%)",
          paddingBlock: 100,
        }}
      >
        <img src={brandlogos} style={{ width: "100%", marginBottom: 50 }} />
        <Table borderless>
          <thead style={{ borderBlock: "1px solid rgba(0, 0, 0, 0.4)" }}>
            <tr>
              <th style={{ width: window.innerWidth / 2 }}>Plans comparison</th>
              <th>Free</th>
              <th>Basic</th>
              <th>PRO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account Analytics</td>
              <td>1 your own</td>
              <td>30/mo</td>
              <td>USD 99 per 10 additional Add to your subscriptions</td>
            </tr>
            <tr>
              <td>PDF export</td>
            </tr>
            <tr>
              <td>CSV export</td>
            </tr>
          </tbody>
        </Table>

        <Table borderless>
          <thead style={{ borderBlock: "1px solid rgba(0, 0, 0, 0.4)" }}>
            <tr>
              <th style={{ width: window.innerWidth / 2 }}>
                Influencer Discovery
              </th>
              <th>Free</th>
              <th>Basic</th>
              <th>PRO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account Analytics</td>
              <td>1 your own</td>
              <td>30/mo</td>
              <td>USD 99 per 10 additional Add to your subscriptions</td>
            </tr>
            <tr>
              <td>PDF export</td>
            </tr>
            <tr>
              <td>CSV export</td>
            </tr>
          </tbody>
        </Table>

        <Table borderless>
          <thead style={{ borderBlock: "1px solid rgba(0, 0, 0, 0.4)" }}>
            <tr>
              <th style={{ width: window.innerWidth / 2 }}>
                Instagram Discovery filters
              </th>
              <th>Free</th>
              <th>Basic</th>
              <th>PRO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account Analytics</td>
              <td>1 your own</td>
              <td>30/mo</td>
              <td>USD 99 per 10 additional Add to your subscriptions</td>
            </tr>
            <tr>
              <td>PDF export</td>
            </tr>
            <tr>
              <td>CSV export</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          gap: 30,
        }}
      >
        <Col md={8}>
          <h1>
            Still have questions about how HypeAuditor can help your business?
          </h1>
        </Col>
        <Button style={{ background: "rgba(0, 41, 71, 1)" }}>
          Contact sales
        </Button>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
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
          {[0, 1].map((v, i) => {
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

export default Pricing;
