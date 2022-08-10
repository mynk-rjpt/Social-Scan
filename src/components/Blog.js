import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import search from "../assets/blog/search.svg"
import frame1 from "../assets/blog/frame1.svg"
import icon1 from "../assets/blog/icon1.svg"
import icon2 from "../assets/blog/icon2.svg"
import icon3 from "../assets/blog/icon3.svg"
import icon4 from "../assets/blog/icon4.svg"
import icon5 from "../assets/blog/icon5.svg"
import icon6 from "../assets/blog/icon6.svg"
import icon7 from "../assets/blog/icon7.svg"
import eye from "../assets/blog/eye.svg"
import {
	Container,
	Row,
	Col,
	Button
} from "react-bootstrap";

const Blog = () => {
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
			<div className="shadow-box-example z-depth-5">
				<Container fluid style={{ justifyContent: "center", padding: 10, alignItems:"center"}}>
					<Row style={{justifyContent: "center" }} >
						<Col md={10} style={{
							backgroundColor: "white",
							alignItems: "center",
							justifyContent: "center",
							display: "flex",
							border: "3px solid rgba(0, 41, 71, 0.1)",
							alignSelf:"center",
							borderRadius: 17,
							gap: 25,
							padding: 40,
						}}
						>
							<Col style={{alignItems: "center",
							justifyContent: "center",
							flex: 1}}>
								{value.image}
							</Col>

							<Col style={{flex: 13}}>
								<h4 style={{color: "rgba(0, 41, 71, 1)", fontWeight:700}}>CloneAuditor</h4>
								<text style={{ fontSize: 15, fontWeight:600, color: "rgba(0, 41, 71, 0.59)" }}>
								Press Stories, Video Reviews and Testimonials that tell how HypeAuditor helps to deal with the influencer's fraud check problem.{" "}
								</text>
							</Col>

							<Col style={{flex: 1, alignItems: "flex-end"}}>
							<button
								style={{
									backgroundColor: "rgb(255,255,255)",
									color: "white",
									width: "fit-content",
									border: "none",
									alignSelf: "center",
								}}
							>
								<img src={eye} />
							</button>
							</Col>
						</Col>
					</Row>
				</Container>
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
				alignItems: "center",
				gap: 35,
				marginBottom: 50,
			}}
			>
				<Row style={{ height: "50%", width: "100%", margin: 30, justifyContent: "center" }}>
					<Col md={10} style={{ display: "flex" }}>
						<input
							placeholder="Search For Articles"
							style={{
								flex: 6,	
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
							<img src={search} />
						</button>
					</Col>
				</Row>
			</Container>

			<Container fluid style={{marginBottom: 100}}>
				<Container>
					{/* <Slider {...settings}> */}
						{[
							{ buttonname: "ASK QUESTION", image: <img src={icon1} /> },
							{ buttonname: "REQUEST DEMO", image: <img src={icon2} />},
							{ buttonname: "CONTACT SALES", image: <img src={icon3} /> },
							{ buttonname: "VISIT NEWSROOM", image: <img src={icon4} />},
							{ buttonname: "VISIT NEWSROOM", image: <img src={icon1} />},
							{ buttonname: "VISIT NEWSROOM", image: <img src={icon2} />},
						].map((v, i) => {
							return <AnalyseAccountComponent key={i} value={v} />;
						})}
					{/* </Slider> */}
				</Container>
			</Container>
			<Container
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
					<h4 style={{fontWeight: 700}}>CloneAuditor</h4>
				</Col>
				
				<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", gap : 70}}>
					<div style={{}}>
						<img src={icon5} style={{margin: "0 auto"}} />
					</div>
					<div>
						<img src={icon6} style={{margin: "0 auto"}}/>
					</div>
					<div>
						<img src={icon7} style={{margin: "0 auto"}}/>
					</div>
				</div>

			</Container>


		</div>
	)
}

export default Blog;