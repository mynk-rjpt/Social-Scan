import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import icon1 from "../assets/technology/icon1.svg"
import icon2 from "../assets/technology/icon2.svg"
import icon3 from "../assets/technology/icon3.svg"
import emoji from "../assets/technology/emoji.svg";
import Slider from "react-slick";
import image2 from "../assets/technology/image2.svg";
import arrow from "../assets/arrow.svg";
import frame1 from "../assets/technology/frame1.svg";
import frame2 from "../assets/technology/frame2.svg";

import {
	Container,
	Row,
	Col,
	Button,
} from "react-bootstrap";


const Technology = () => {
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
      <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
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
            maxWidth: 350
          }}
        >
          {value.image}
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
					flexDirection: "column",
					textAlign: "center",
					gap: 30,
					marginBottom: 100,
				}}
			>
				<Col md={10} style={{ alignSelf: "center" }}>
					<h1>Which methods and algorithms stand behind HypeAuditor data?</h1>
				</Col>
				<Row style={{ justifyContent: "center" }}>
					<Col
						sm={12}
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
						<Button style={{ background: "#002947" }}>TRY IT NOW</Button>
					</Col>
				</Row>
			</Container>

      <Container fluid style={{ marginBottom: 100 }}>

        <Container>
          <Slider {...settings}>
            {[
              { title: "Machine learning", buttonname: "TRY IT NOW", image: <img src={icon1} /> },
              { title: "Request a Demo", buttonname: "TRY IT NOW", image: <img src={icon2} /> },
              { title: "Sales Inquiry", buttonname: "TRY IT NOW", image: <img src={icon3} /> },
            ].map((v, i) => {
              return <AnalyseAccountComponent key={i} value={v} />;
            })}
          </Slider>
        </Container>
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
            marginBottom: 80
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
	)
}


export default Technology;





