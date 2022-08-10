import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../assets/logo.svg";

const NavBar = () => {
  let navigate = useNavigate();
  return (
    <Navbar bg="white" expand="md" style={{ borderRadius: 15, margin: 20 }}>
      <Container>
        <Navbar.Brand
          // onClick={() => navigate("/")}
          href="/"
        >
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav
            style={{
              flex: 0.8,
              justifyContent: "space-between",
            }}
          >
            <Nav
              style={{
                alignItems: "center",
              }}
            >
              <NavDropdown
                title="Why CloneAuditor?"
                id="basic-nav-dropdown"
                className="navbar-text"
              ></NavDropdown>
              <Nav.Link
                onClick={() => navigate("/pricing")}
                className="navbar-text"
              >
                Pricing
              </Nav.Link>

              <NavDropdown
                title="Resources"
                id="basic-nav-dropdown"
                className="navbar-text"
              ></NavDropdown>
              <NavDropdown
                title="About"
                id="basic-nav-dropdown"
                className="navbar-text"
              ></NavDropdown>
            </Nav>
            <Nav
              style={{
                alignItems: "center",
              }}
            >
              <Nav.Link
                onClick={() => navigate("/login")}
                style={{ fontWeight: "bold", fontSize: "13.9404px" }}
              >
                Log in
              </Nav.Link>
              <Button onClick={() => navigate("/signup")} style={{ background: "#002947" }}>Get Started</Button>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
