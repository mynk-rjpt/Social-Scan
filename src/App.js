import React from "react";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import InfluencerAnalysis from "./components/InfluencerAnalysis";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import InfluencerDiscovery from "./components/InfluencerDiscovery";
import CampaignManagement from "./components/CampaignManagement";
import MarketAnalysis from "./components/MarketAnalysis";
import ContactUs from "./components/ContactUs";
import Affiliate from "./components/Affiliate";
import Technology from "./components/Technology";

import FreeTools from "./components/FreeTools";
import CustomerStories from "./components/CustomerStories";
import Blog from "./components/Blog";
import BecomeAPartner from "./components/BecomeAPartner";
import Pricing from "./components/Pricing";
import Press from "./components/Press";
import Customers from "./components/Customers";
import CustomerDashboard from "./components/CustomerDashboard";
import Login  from "./components/Login";
import Signup  from "./components/Signup";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <NavBar />
                  <Outlet />
                  <Footer />
                </div>
              }
            >
              <Route index element={<Home />} />
              <Route
                path="/influenceranalytics"
                element={<InfluencerAnalysis />}
              />
              <Route
                path="/influencerdiscovery"
                element={<InfluencerDiscovery />}
              />
              <Route
                path="/campaignmanagement"
                element={<CampaignManagement />}
              />
              <Route path="/marketanalysis" element={<MarketAnalysis />} />
              <Route path="/technology" element={<Technology />} />
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/affiliate" element={<Affiliate />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/freetools" element={<FreeTools />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customerdashboard" element={<CustomerDashboard />} />

              <Route path="/becomeapartner" element={<BecomeAPartner />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/press" element={<Press />} />
            </Route>
            {/* <Route path="/signin" element={<div>Signin</div>} /> */}
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
