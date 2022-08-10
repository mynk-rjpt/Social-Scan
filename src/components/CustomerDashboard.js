import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import frame1 from "../assets/customerstories/frame1.svg";
import image1 from "../assets/freetools/image1.svg";
import icon1 from "../assets/customerdashboard/icon1.svg";
import icon2 from "../assets/customerdashboard/icon2.svg";
import icon3 from "../assets/customerdashboard/icon3.svg";
import icon4 from "../assets/customerdashboard/icon4.svg";
import icon5 from "../assets/customerdashboard/icon5.svg";
import icon6 from "../assets/customerdashboard/icon6.svg";
import pin from "../assets/customerdashboard/pin.svg";
import cardimg from "../assets/customerdashboard/cardimg.svg";
import Slider from "react-slick";	

import {
	Container,
	Row,
	Col,
	Button
} from "react-bootstrap";

const CustomerDashboard = () => {
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
            border: "4px solid rgba(0, 41, 71, 0.1)",
            borderRadius: 17,
            gap: 20,
            padding: 40,
						maxWidth: 350,
          }}
        >
          <img src={image1}/>
          {/* {value.image} */}
          {/* <h4>{value.title}</h4> */}
          <div style={{alignItems: "center", textAlign: "center", justifyContent: "center", marginTop: 15}}>
            <text style={{ fontSize: 15, color: "rgba(0, 0, 0, 1)", fontWeight:"700", }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam facilisis eros ut ultrices dictum. Mauris eleifend tincidunt malesuada. 
            Vivamus condimentum semper odio sit amet fringilla{" "}
            </text>
          </div>
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
      <Container fluid 
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: 30,
          marginBlock: 50,
        }}
      >
        <Col
          style={{
            fontSize: 20,
            color: "rgba(0, 41, 71, 1)",
            fontWeight: "700",
          }}
        >
          Try Campaign Management for Instagram, YouTube, and TikTok for FREE. Track campaign status, create and share beautiful reports:
        </Col>
      </Container>
      <Container fluid style={{display: "flex"}}>
        <Col className="d-none d-md-block" md={2} style={{backgroundColor: "rgba(0, 41, 71, 1)"}}>
          <Row style={{display: "flex", marginTop: 20, marginLeft: 5, gap: 10}}>
            <Col style={{color: "rgba(255, 255, 255, 1)", alignSelf: "center" }}>
              <h4>CloneAuditor</h4>
            </Col>
            <Col>
              <img src={pin} />
            </Col>


          </Row>
        </Col>
        <Col md={10} xs={12}>
          <Container fluid 
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 35,
              marginBottom: 50,   
            }}
          >
            <Row style={{ width: "100%",
             justifyContent: "center" 
             }}>
              <Col md={8} style={{ display: "flex" }}>
                <input
                  placeholder="Analyze any influencer"
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
                  Advanced Search    
                </button>
              </Col>
            </Row>

            <div
              style={{
                display: "flex",
                textAlign: "center",
                gap: 120,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: 50 }}>
                <img src={icon1} style={{ marginBottom: 30 }} />
              </div>
              <div style={{ width: 50 }}>
                <img src={icon2} style={{ marginBottom: 30 }} />
              </div>
              <div style={{ width: 50 }}>
                <img src={icon3} style={{ marginBottom: 30 }} />
              </div>
              <div style={{ width: 50 }}>
                <img src={icon4} style={{ marginBottom: 30 }} />
              </div>
              <div style={{ width: 50 }}>
                <img src={icon5} style={{ marginBottom: 30 }} />
              </div>
              <div style={{ width: 50 }}>
                <img src={icon6} style={{ marginBottom: 30 }} />
              </div>
            </div>

            <Container fluid style={{ marginBottom: 50 }}>

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
            
          </Container>
        </Col>
      </Container>
    </div>
  )
}

export default CustomerDashboard;