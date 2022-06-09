//importing necessary modules.s
import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/imdb-white-logo.png" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get premier access with subscription. Savings compared to regular
          price for each service for 18+ only. Access content from each service
          separately via IMDb. No purchase or viewing of pay-per-view. Location
          data required to watch certain content. Offer valid for eligible
          subscribers only. Subject to{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            IMDb Terms.
          </span>
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

// Styling each JSX elements using styled components
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  align-items: top;
  display: flex;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;
const CTALogoOne = styled.img`
  width: 100px;
  height: 40px;
`;
const SignUp = styled.a`
  width: 80%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  width: 90%;
`;
