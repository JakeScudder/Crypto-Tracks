import React from "react";
import { Row, Col } from "react-bootstrap";
import gecko from "../coingecko-logo.webp";

const Footer = () => {
  return (
    <div id="footer">
      <Row>
        <Col className="footer-col">
          <Row className="footer-row">Made by</Row>
          <Row className="footer-row">Jake Morris</Row>
        </Col>
        <Col className="footer-col">
          <Row className="footer-row">Powered by</Row>
          <Row className="footer-row">
            <img src={gecko} style={{ height: "25px" }} alt="CoinGecko API" />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
