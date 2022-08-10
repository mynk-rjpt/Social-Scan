import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import frame1 from "../assets/customerstories/frame1.svg";
import brandlogos from "../assets/brandlogos.svg";
import arrow from "../assets/arrow.svg";
import image2 from "../assets/customerstories/image2.svg";
import {
	Container,
	Row,
	Col,
	Button
} from "react-bootstrap";

const CustomerStories = () => {
	return(
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
          marginBottom: 50,
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
					marginBottom: 40,
				}}
			>
				<Col lg={10} md={12} style={{color: "rgba(0, 41, 71, 1)", alignSelf: "center" }}>
					<h1>HypeAuditor Case Studies: How Brands and Agencies Grow Their Business with HypeAuditor</h1>
				</Col>
				<Row style={{ justifyContent: "center" }}>
					<Col
						sm={10}
						style={{
							color: "rgba(0, 41, 71, 0.59)",
							fontWeight: "700",
						}}
					>
						Search for Instagram, YouTube and TikTok influencers 
						profiles across the 23M+ database. Apply a set of filters 
						to discover the perfect influencer match for your brand.
					</Col>
				</Row>
			</Container>

			<Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginBottom: 50,
        }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={brandlogos} style={{ width: "100%" }} />
          <img src={brandlogos} style={{ width: "100%" }} />
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
            sm={5} className="d-none d-sm-block"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(236, 249, 255, 1), white)",
              padding: 50,
            }}
          >
            <img src={image2} style={{ width: "100%", opacity: 0 }} />
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




		</div>
	)
}

export default CustomerStories;