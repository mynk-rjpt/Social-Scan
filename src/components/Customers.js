import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import frame1 from "../assets/customers/frame1.svg"
import emojicircle from "../assets/customers/emojicircle.svg"
import img1 from "../assets/becomeapartner/img1.svg";
import img2 from "../assets/customers/img2.svg";
import img3 from "../assets/customers/img2.svg";
import img4 from "../assets/customers/img2.svg";
import brandlogos from "../assets/brandlogos.svg";
import frame2 from "../assets/customers/frame2.svg";
import frame3 from "../assets/customers/frame3.svg";


import {
	Container,
	Row,
	Col,
	Button
} from "react-bootstrap";

const Customers = () => {
  const AnalysisComponent = ({ txt, image }) => {
    return (
      <Row
        style={{
          textAlign: "center",
          justifyContent: "center",
          gap: 25,
          marginBottom: 50

        }}
      >
        <img src={image} style={{ width: 130, height: 130 }} />
        <h2>{txt}</h2>
        <Row style={{ justifyContent: "center" }}>
          <Col
            sm={8}
            style={{
              fontSize: 20,
              color: "rgba(0, 41, 71, 0.59)",
              fontWeight: 700,
            }}
          >
            Press Stories, Video Reviews and Testimonials that tell how HypeAuditor helps 
            to deal with the influencer's fraud check problem.
          </Col>
        </Row>
        <Col>
        <Button style={{ background: "#002947", width: 210 }}>
          Join Now
        </Button>
        </Col>

        <Col md={10} style={{alignSelf: "center"}}>
          <img src={brandlogos} style={{ width: "100%" }} />
        </Col>
      </Row>
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
          marginBlock: 100,
        }}
      >
        <Col md={8} style={{ alignSelf: "center" }}>
          <h1 style={{color: "rgba(0, 41, 71, 1)"}}>You are in good company with HypeAuditor</h1>
        </Col>
        <Row style={{ justifyContent: "center" }}>
          <Col
            sm={8}
            style={{
              fontSize: 20,
              color: "rgba(0, 41, 71, 0.59)",
              fontWeight: "700",
            }}
          >
            Press Stories, Video Reviews and Testimonials that tell how HypeAuditor helps 
						to deal with the influencer's fraud check problem.
          </Col>
        </Row>

        <Col>
          <img src={img1} style={{ position: "absolute", right: "30%"}} />
        </Col>
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
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
					<Col md={10} style={{alignSelf: "center"}}>
						<img src={brandlogos} style={{ width: "100%" }} />
						<img src={brandlogos} style={{ width: "100%" }} />
					</Col>
        </Row>
      </Container>

      <Container fluid style={{ alignItems: "center", paddingBlock: 50, marginBottom: 100}}>
        <AnalysisComponent txt="Brands & businesses" image={img2} />
        {/* <Row>
        <div
          style={{
            position: "absolute",
            // zIndex: -1,
          }}
        >
          <img
            className="d-none d-lg-block"
            src={frame3}
            style={{
              width: window.innerWidth - 29,
            }}
          />
        </div>
        </Row> */}
        <AnalysisComponent txt="Platforms" image={img3} />
        <AnalysisComponent txt="Agencies" image={img3} />
      </Container>




		</div>
  )
}

export default Customers;