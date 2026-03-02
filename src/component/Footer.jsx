import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";



const Footer = () => {
  return (
    <Container fluid='xll' className='c-44'>
      <Row className='row0'>
        <Col className='col0'>
        <h2>plants&pots</h2>
         <h5>monday - friday</h5>
         <span>8:00am - 9:00pm</span>
         <p className='p0'>A garden is a planned space, usually outdoors, set aside for the cultivation, display, and enjoyment of plants and other forms of nature. The single feature identifying even the wildest wild garden is control. The garden can incorporate both natural and artificial materials.</p>
        </Col>
        <Col className='col0 col01'>
        <h6>SHOP</h6>
        <ul>
          <li>search</li>
          <li>news</li>
          <li>all collection</li>
          <li>all products</li>
        </ul>
        </Col>
        <Col className='col0 col02'>
        <h6>ABOUT US</h6>
        <ul>
          <li>about us</li>
          <li>contact us</li>
          <li>featured asked <br/> question</li>
          <li>privacy policy</li>
          <li>shipping&Delivery</li>
          <li>terms&Conditions</li>
        </ul>
        </Col>
        <Col className='col0 col03'>
        <h6>SHARE</h6>
        <p>Gardens are related to farms (agriculture); both gardens and farms are used for growing plants. But farms are much larger than gardens.</p>
        <div className="iconss">
          <CiYoutube className='foot-i' />
          <CiFacebook className='foot-i' />
          <CiInstagram className='foot-i' />
          <CiTwitter className='foot-i' />
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
