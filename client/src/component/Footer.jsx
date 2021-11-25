import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import apps from "../img/apps.png";
import google from "../img/google.png";
import footer from "../img/footer.png";

const Footer = () => {
  return (
    <div>
      <MDBFooter backgroundColor="dark" className="text-center text-lg-left bg-dark">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
              <h5 className="text-start text-light">OTHER MENU</h5>

              <ul className="list-unstyled mb-0 text-start fw-light">
                <li>
                  <a href="#!" className="text-light">
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    BLOG
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    CONTACT US
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    F.A.Q TERMS & CONDITIONS
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    TERMS & CONDITIONS
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    PRIVACY POLICY
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
              <h5 className="text-start text-light">SHOPPING MENU</h5>

              <ul className="list-unstyled text-start fw-light">
                <li>
                  <a href="#!" className="text-light">
                    HOW TO BUY
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    TRANSFER CONFIRMATION
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    ORDER TRACKING
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    CHECK SHIPPING FEE
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
              <h5 className="text-start text-light">MOBILE APP</h5>

              <ul className="list-unstyled mb-0 text-start">
                <li>
                  <img className="mb-3" src={apps} alt="apps" />
                </li>
                <li>
                  <img src={google} alt="google" />
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className="d-flex container text-start p-3 bd-dark text-light">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-light" href="https://mdbootstrap.com/">
            alif & rinaldy
          </a>
          <img className="d-flex ms-auto" src={footer} alt="footer" />
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
