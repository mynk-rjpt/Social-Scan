import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../assets/freetools/image1.svg";
import icon1 from "../assets/freetools/icon1.svg";
import icon2 from "../assets/freetools/icon2.svg";
import icon3 from "../assets/freetools/icon3.svg";
import frame1 from "../assets/freetools/frame1.svg";
import emoji from "../assets/freetools/emoji.svg";
import Slider from "react-slick";	
import { Container, Row, Col, Nav, Accordion, Dropdown } from "react-bootstrap";

const FreeTools = () => {
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
      <div style={{ justifyContent: "center",alignItems: "center", display: "flex", 
			flexDirection: "column"
			}}
			>
        <div
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            border: "3px solid rgba(0, 41, 71, 0.1)",
            borderRadius: 17,
            gap: 20,
            padding: 40,
						maxWidth: 350,
          }}
        >
          <img src={image1}/>
          <div style={{alignItems: "center", textAlign: "center", justifyContent: "center", marginTop: 15}}>
            <text style={{ fontSize: 15, color: "rgba(0, 0, 0, 1)", fontWeight:"700", }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis eros ut ultrices dictum.{" "}
            </text>
          </div>

          <button
            style={{
              backgroundColor: "rgba(0, 41, 71, 1)",
              color: "white",
              width: "100%",
              maxWidth: 160,
              height: 40,
              borderRadius: 8,
              alignSelf: "center",
              marginTop: 5,
            }}
          >
            {value.buttonname}
          </button>
        </div>
      </div>
    );
  };

  const AccordianComponent = ({value}) => {
		return(
			<div 
				style={{
					textAlign:"left"
				}}
			>
				<Accordion>
					<Accordion.Item style={{borderTop: "none", borderLeft: "none", borderRight: "none"}} eventKey="0">
						<Accordion.Header > <p style={{color: "rgba(0, 0, 0, 0.46)", fontWeight: "600"}}>{value.title}</p> </Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		)
	}


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
					marginBottom: 25,
				}}
			>
				<Col md={10} style={{color: "rgba(0, 41, 71, 1)", alignSelf: "center" }}>
					<h1>Free Tools for Influencer Marketing</h1>
				</Col>
				<Row style={{ justifyContent: "center" }}>
					<Col
						md={9} sm={12}
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

				<Row
					style={{ justifyContent: "center", gap: 50, alignItems: "center" }}
				>
					<Col
						md="auto"
						style={{
							color: "rgba(0, 41, 71, 0.76)",
							fontWeight: "700",
						}}
					>
						<h4>FREE handy pack for daily usage</h4>
					</Col>
				</Row>
			</Container>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        marginBottom: 50,
      }}>
          <Nav className="flex-sm-row flex-column"
          variant="tabs" 
          activeKey="link-0" style={{display: "flex", borderColor:"rgba(0, 41, 71, 0.37)", borderWidth: 3, flexWrap: "nowrap", gap:30}} defaultActiveKey="/home" >
            <Nav.Item>
              <Nav.Link eventKey="link-0" style={{fontWeight: "700", color: "rgba(0, 41, 71, 0.76)"}}>All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" style={{fontWeight: "700", color: "rgba(0, 41, 71, 0.76)"}}>Instagram</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" style={{fontWeight: "700", color: "rgba(0, 41, 71, 0.76)"}}>YouTube</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" style={{fontWeight: "700", color: "rgba(0, 41, 71, 0.76)"}}>TikTok</Nav.Link>
            </Nav.Item>
          </Nav>
      </div>


			
      <Container fluid style={{ marginBottom: 100 }}>

        <Container>
          <Slider {...settings}>
            {[
              { title: "Customer Support", buttonname: "TRY IT NOW" },
              { title: "Request a Demo", buttonname: "TRY IT NOW" },
              { title: "Sales Enquiry", buttonname: "TRY IT NOW" },
            ].map((v, i) => {
              return <AnalyseAccountComponent key={i} value={v} />;
            })}
          </Slider>
        </Container>

				<div style={{margin: 30}}></div>

				<Container>
          <Slider {...settings}>
            {[
              { title: "Customer Support", buttonname: "TRY IT NOW" },
              { title: "Request a Demo", buttonname: "TRY IT NOW" },
              { title: "Sales Enquiry", buttonname: "TRY IT NOW" }, 
            ].map((v, i) => {
              return <AnalyseAccountComponent key={i} value={v} />;
            })}
          </Slider>
        </Container>

      </Container>

			<Container style={{
				display: "flex",
				flexDirection: "column",
				gap: 30,
				marginBottom: 100
			}}
			>
				<Row style={{alignSelf:"center", justifyContent: "center", marginLeft: 15, marginRight: 15}}>
					<Col
						md={12} sm={12}
						style={{
							color: "rgba(0, 41, 71, 0.59)",
							fontSize: 20,
							fontWeight: "800",
							alignSelf: "center"
						}}
					>
						Free Influencer Marketing Tools to Get Started
					</Col>
				</Row>
				<Row style={{justifyContent: "center", marginLeft: 15, marginRight: 15}}>
					<Col
						md={12} sm={12}
						style={{
							color: "rgba(0, 41, 71, 0.59)",
							fontWeight: "600",
						}}
					>
						The last few years have seen a significant rise in the popularity of influencer marketing. Many companies have made collaborations with social media creators a key part of their marketing mix.
					</Col>
				</Row>
				<Row style={{justifyContent: "center", marginLeft: 15, marginRight: 15}}>
					<Col
						md={12} sm={12}
						style={{
							color: "rgba(0, 41, 71, 0.59)",
							fontWeight: "600",
						}}
					>
						But can you ensure your strategy is effective and bring the desired results? This is where good influencer marketing tools become your right hand to empower your campaign.
					</Col>
				</Row>
				<Row style={{justifyContent: "center", marginLeft: 15, marginRight: 15}}>
					<Col
						md={12} sm={12}
						style={{
							color: "rgba(0, 41, 71, 0.59)",
							fontWeight: "600",
						}}
					>
						If you are looking for the right software, you can try our free influencer marketing tools and calculators first. Whether you work with Instagram, YouTube, or TikTok, you will find a range of helpful tools that you can use for free. Below are just a few of our calculators
					</Col>
				</Row>
				<Row style={{justifyContent: "left", marginLeft: 15, marginRight: 15}}>
					<Col
						md={12} sm={12}
						style={{
							color: "rgba(0, 41, 71, 0.59)",
							fontWeight: "600",
						}}
					>
						· Instagram Engagement Calculator
						<br />
						· Instagram Money Calculator
						<br />
						· Instagram Audit and Fake Follower Check
						<br />
						· YouTube Channel Quality Checker
						<br />
						· TikTok Engagement Calculator
					</Col>
				</Row>
				<Row style={{justifyContent: "center", marginLeft: 15, marginRight: 15}}>
					<Col
						md={12} sm={12}
						style={{
							color: "rgba(0, 41, 71, 0.59)",
							fontWeight: "600",
						}}
					>
						Easily view the Engagement Rate on Instagram and the suggested price for a sponsored Instagram post or YouTube video. Check the account for fake followers and likes to understand how authentic their audience is.					</Col>
				</Row>
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

			<Container fluid
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
					gap: 30,
					marginBottom: 50
				}}	
			>
				<Col md={10} style={{color: "rgba(0, 41, 71, 1)", alignSelf: "center" }}>
					<h4>CloneAuditor</h4>
				</Col>

				<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", gap : 70}}>
					<div style={{}}>
						<img src={icon1} style={{margin: "0 auto"}} />
					</div>
					<div>
						<img src={icon2} style={{margin: "0 auto"}}/>
					</div>
					<div>
						<img src={icon3} style={{margin: "0 auto"}}/>
					</div>
				</div>

			</Container>

		</div>
	);
}

export default FreeTools;
