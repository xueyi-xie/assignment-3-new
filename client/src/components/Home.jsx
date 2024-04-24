import "../style/home.css";
import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';



export default function Home() {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const signUp = () => loginWithRedirect({ screen_hint: "signup" });

  return (
    <div className="home">
      <h1>CatFinder</h1>
      <div>
        {!isAuthenticated ? (
          /*
          <button className="btn-primary" onClick={loginWithRedirect}>
          Login
        </button>
        */
          <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>CatFinder</MDBNavbarBrand>
            <MDBNavbarToggler
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setOpenNavSecond(!openNavSecond)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar open={openNavSecond}>
              <MDBNavbarNav>
                <MDBNavbarLink active aria-current='page' href='http://localhost:3000/'>
                  Home
                </MDBNavbarLink>
                <MDBNavbarLink active aria-current='page' href='#'>
                  About
                </MDBNavbarLink>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Adopt
                </MDBNavbarLink>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Volunteer
                </MDBNavbarLink>
                <MDBNavbarLink active aria-current='page' onClick={loginWithRedirect}>
                  Log In
                </MDBNavbarLink>
                <MDBNavbarLink active aria-current='page' href='http://localhost:3000/register'>
                  Create Account
                </MDBNavbarLink>
                <MDBNavbarLink active aria-current='page' href='http://localhost:3000/admin'>
                  Admin
                </MDBNavbarLink>
                
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
          
        ) : (
          <button className="btn-primary" onClick={() => navigate("/app")}>
            Enter App
          </button>
        )}
      </div>
      <div>
        <button className="btn-secondary" onClick={signUp}>
          Create Account
        </button>
      </div>
    </div>
  );
}
