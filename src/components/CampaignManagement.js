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
import image2 from "../assets/campaignmanagement/image2.svg";
import arrow from "../assets/arrow.svg";
import frame1 from "../assets/campaignmanagement/frame1.svg";
import frame2 from "../assets/campaignmanagement/frame2.svg";
import image1 from "../assets/campaignmanagement/image1.svg";
import menu from "../assets/campaignmanagement/menu.svg";
import addpeople from "../assets/campaignmanagement/addpeople.svg";
import addmail from "../assets/campaignmanagement/addmail.svg";
import balancescale from "../assets/campaignmanagement/balancescale.svg";
import productmanager from "../assets/campaignmanagement/productmanager.svg";
import framelast from "../assets/campaignmanagement/framelast.svg";

const CampaignManagement = () => {
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
          <h1>Data-Driven Influencer Campaign Management Solution</h1>
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
          <div
            style={{
              background: "rgba(192, 170, 255, 0.14)",
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
              src={menu}
              style={{
                width: 70,
              }}
            />
          </div>
          <h2>
            Media Plans for Influencer{" "}
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "red",
                textUnderlineOffset: "8px",
              }}
            >
              Campaigns
            </span>
          </h2>
          <Row style={{ justifyContent: "center" }}>
            <Col
              md={8}
              lg={6}
              style={{
                color: "rgba(0, 41, 71, 0.59)",
                fontWeight: "bold",
              }}
            >
              Analyze Instagram influencers with over 35 valuable metrics like
              engagement rate, follower growth, and comments authenticity. Avoid
              fake influencers and partner only with authentic Instagram
              creators.
            </Col>
          </Row>
          <p
            style={{
              fontWeight: "bold",
              color: "rgba(0, 41, 71, 0.59)",
              fontSize: 12,
            }}
          >
            Analyze Instagram influencers with over 35 valuable metrics like
            engagement rate, follower gro\rs.
          </p>
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
            <img src={image1} style={{ width: "100%" }} />
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
          <div
            style={{
              background: "white",
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
              src={addpeople}
              style={{
                width: 70,
              }}
            />
          </div>
          <h2>
            Media Plans for Influencer{" "}
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "red",
                textUnderlineOffset: "8px",
              }}
            >
              Campaigns
            </span>
          </h2>
          <Row style={{ justifyContent: "center" }}>
            <Col
              md={8}
              lg={6}
              style={{
                color: "rgba(0, 41, 71, 0.59)",
                fontWeight: "bold",
              }}
            >
              Analyze Instagram influencers with over 35 valuable metrics like
              engagement rate, follower growth, and comments authenticity. Avoid
              fake influencers and partner only with authentic Instagram
              creators.
            </Col>
          </Row>
          <p
            style={{
              fontWeight: "bold",
              color: "rgba(0, 41, 71, 0.59)",
              fontSize: 12,
            }}
          >
            Analyze Instagram influencers with over 35 valuable metrics like
            engagement rate, follower gro\rs.
          </p>
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
            <img src={image1} style={{ width: "100%" }} />
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
          <div
            style={{
              background: "rgba(255, 214, 152, 0.25)",
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
              src={addmail}
              style={{
                width: 70,
              }}
            />
          </div>
          <h2>
            Media Plans for Influencer{" "}
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "red",
                textUnderlineOffset: "8px",
              }}
            >
              Campaigns
            </span>
          </h2>
          <Row style={{ justifyContent: "center" }}>
            <Col
              md={8}
              lg={6}
              style={{
                color: "rgba(0, 41, 71, 0.59)",
                fontWeight: "bold",
              }}
            >
              Analyze Instagram influencers with over 35 valuable metrics like
              engagement rate, follower growth, and comments authenticity. Avoid
              fake influencers and partner only with authentic Instagram
              creators.
            </Col>
          </Row>
          <p
            style={{
              fontWeight: "bold",
              color: "rgba(0, 41, 71, 0.59)",
              fontSize: 12,
            }}
          >
            Analyze Instagram influencers with over 35 valuable metrics like
            engagement rate, follower gro\rs.
          </p>
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
        <Row style={{ justifyContent: "center", textAlign: "center", gap: 20 }}>
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
            Media Plans for Influencer{" "}
            <span
              style={{
                textDecorationLine: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "red",
                textUnderlineOffset: "8px",
              }}
            >
              Campaigns
            </span>
          </h2>
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
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Button style={{ background: "#002947", paddingInline: 30 }}>
              GET A FREE DEMO
            </Button>
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Col md={10}>
          <img src={productmanager} style={{ width: "100%" }} />
          {/* <img
            src={framelast}
            style={{ position: "absolute", width: "100%" }}
          /> */}
        </Col>
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

export default CampaignManagement;
