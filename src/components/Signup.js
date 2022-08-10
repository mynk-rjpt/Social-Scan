import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from "../assets/login/image1.svg"
import google from "../assets/login/google.svg"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import {
	Container,
	Row,
	Col,
	Button
} from "react-bootstrap";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [name2, setName2] = useState("");
  const [nameError2, setNameError2] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    if (name==null || name=="") {
    // if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
      formIsValid = false;
      setNameError(
        "Firstname can't be blank"
      );
      return false;
    } else {
      setNameError("");
      formIsValid = true;
    }

    if (name2==null || name2=="") {
      // if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        formIsValid = false;
        setNameError2(
          "Lastname can't be blank"
        );
        return false;
      } else {
        setNameError2("");
        formIsValid = true;
      }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return(
    <div 
      style={{
        // paddingLeft: 100
      }}
    >
      <Container fluid style={{display: "flex"}}>
        <Col md={4} className="d-none d-md-block"
          style={{
            // width: "fit-content"
            // backgroundColor: "rgba(0, 41, 71, 1)", 
            // backgroundImage: <img src={image1} />
          }}
        >
          <div> <img src={image1} /> </div>
          {/* <Row style={{display: "flex", marginTop: 20, marginLeft: 5, gap: 10}}>
          </Row> */}
        </Col> 
        <Col md={8}
          style={{
              // backgroundColor: "red",
              // maxWidth: "100%",
              display: "flex",
              flexDirection: "column"
            }}
          >
          <Row style={{display: "flex", alignItems: "center"}}>
            <Col style={{display: "flex",alignItems: "center", justifyContent: "flex-end", marginTop: 50, marginRight: 40}}>
              <text style={{color: "rgba(0, 41, 71, 0.24)", marginRight: 6}}>Already have an account?</text>
              <Button variant="outline-primary" size="sm" style={{color: "rgb(0,41,71)", background: "#FFFFFF", borderRadius: 5, borderColor: "rgb(0,41,71)" }}>
                Log in
              </Button>
            </Col>
          </Row>
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
              <h1>Get Started Absolutely Free</h1>
            </Col>
            <Col md={8} style={{ alignSelf: "center", marginTop: -25, marginBottom: -20 }}>
              <p style={{color: "rgba(0, 41, 71, 0.24)", fontSize: 17, fontWeight: 600}}>No Credit Cards. Free Forever</p>
            </Col>
            <Row style={{justifyContent: "center", alignItems: "center"}}>
              <Button variant="outline-primary" style={{background: "white", maxWidth: 450, borderRadius: 15, borderColor: "rgba(0, 41, 71, 1)"}}>
                <img src={google} />
                <text style={{marginLeft: 6, color: "rgba(0, 41, 71, 0.24)", fontSize: 17, fontWeight: 600}}>Sign in with Google</text>
              </Button>
            </Row>
            {/* <div className="container"> */}
            <Container>
              {/* <div className="row d-flex justify-content-center"> */}
                <Row style={{display: "flex", justifyContent: "center"}}>
                {/* <div className="col-md-4" style={{textAlign: "left"}}> */}
                <Col md={6} style={{textAlign: "left"}}>
                  <form style={{display: "flex", flexDirection: "column", gap: 15}} id="loginform" onSubmit={loginSubmit}>
                    <div className="form-group" style={{display: "flex", flexDirection: "column", gap: 10}}>
                      <label style={{color: "#B9C9D3"}}>WORK E-MAIL ADDRESS</label>
                      <input
                        type="email"
                        className="form-control"
                        id="EmailInput"
                        name="EmailInput"
                        aria-describedby="emailHelp"
                        placeholder="e,g, example@mycompany.com"
                        onChange={(event) => setEmail(event.target.value)}
                        style={{borderRadius: 12, height: 50}}
                      />
                      <small style={{marginTop: -10, marginLeft: 10}} id="emailHelp" className="text-danger form-text">
                        {emailError}
                      </small>
                    </div>
                    <div className="form-group" style={{display: "flex", flexDirection: "column", gap: 10}}>
                      <label style={{color: "#B9C9D3"}}>PASSWORD</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="8 Characters minimum"
                        onChange={(event) => setPassword(event.target.value)}
                        style={{borderRadius: 12, height: 50}}
                      />
                      <small style={{marginTop: -10, marginLeft: 10}} id="passworderror" className="text-danger form-text">
                        {passwordError}
                      </small>
                    </div>
                    <div style={{display: "flex", gap:20}}>
                      <div className="form-group" style={{display: "flex", flexDirection: "column", gap: 10}}>
                        <label style={{color: "#B9C9D3"}}>FIRST NAME</label>
                        <input
                          type="text"
                          className="form-control"
                          id="NameInput"
                          name="NameInput"
                          aria-describedby="nameHelp"
                          placeholder="John"
                          onChange={(event) => setName(event.target.value)}
                          style={{borderRadius: 12, height: 50}}
                        />
                        <small style={{marginTop: -10, marginLeft: 10}} id="nameHelp" className="text-danger form-text">
                          {nameError}
                        </small>
                      </div>
                      <div className="form-group" style={{display: "flex", flexDirection: "column", gap: 10, marginLeft: "auto"}}>
                        <label style={{color: "#B9C9D3"}}>LAST NAME</label>
                        <input
                          type="text"
                          className="form-control"
                          id="NameInput"
                          name="NameInput"
                          aria-describedby="nameHelp"
                          placeholder="Smith"
                          onChange={(event) => setName2(event.target.value)}
                          style={{borderRadius: 12, height: 50}}
                        />
                        <small style={{marginTop: -10, marginLeft: 10}} id="nameHelp" className="text-danger form-text">
                          {nameError2}
                        </small>
                      </div>
                    </div>
                    <Button md={6} type="submit" style={{width: "100%", background: "rgba(0, 41, 71, 1)", marginTop: 15}}>
                      Create Free Account
                    </Button>
                  </form>
                </Col>
                {/* </div> */}
              </Row>
              {/* </div>  */}
            </Container>
            {/* </div> */}
          </Container>
          
        </Col>
      </Container>
    </div>
  ) 
}

export default Login;