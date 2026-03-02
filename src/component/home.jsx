import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "./plant3.png";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img1 from "./plant-imagess/img1.png";
import CardImg1 from "./plant-imagess/Image10.png";
import CardImg2 from "./plant-imagess/Image8.png";
import CardImg3 from "./plant-imagess/Image4.png";
import CardImg4 from "./plant-imagess/Image2.png";
import Background1 from "./plant-imagess/left-leaf.png";
import Background2 from "./plant-imagess/right-leaf.png";
import Zoom1 from "./plant-imagess/zoom.png";
import Zoom2 from "./plant-imagess/img4.png";
import Zoom3 from "./plant-imagess/zoom2.png";
import banner from './plant-imagess/bg-n.jpg'
import { AiOutlinePlayCircle } from "react-icons/ai";
import Footer from "./Footer";
import Slider from "./slider";



const Home = () => {
  
  return (
    <>
      <Container  className="Home">
        <img
          src={banner}
          alt="banner"
        />
        <Container fluid="md" className="baner">
          <div className="main">
            <h2>Plant fashion</h2>
            <h1 className="top">
              create a topical interior <br /> <span>to your home</span>
            </h1>
            <p>
              we use natural flexible and stable ceramic pots that are naturally
              flexible and stable in production
            </p>
            <Button className="button">check more products</Button>
          </div>
        </Container>
        <div className="image-div">
          <img src={logo} alt="plant3" />
        </div>
      </Container>
      <Container fluid className="c-1">
        <img id="back" src={Background1} alt="" />
        <img id="back1" src={Background2} alt="" />

        <h1>Bestsellers</h1>
        <Row className="justify-content-md-space-around row ">
          <Col className="col">
            <div className="col-main">
              <div className="image-main">
                <div className="image-1">
                  <img src={CardImg1} alt="" />
                </div>
                <p className="text">Add to wishlist</p>
              </div>
              <div className="main2">
                <div className="head-main">
                  <h6>rolling nature good luck mone...</h6>
                  <p>height: 30cm</p>
                </div>
                <div className="head2">
                  <h6 className="h6">
                    USD 770.00 <span>USD 660.00</span>
                  </h6>
                </div>

                <div className="in-main">
                  <label>Pot: </label>
                  <input
                    placeholder="20cm"
                    className="input-2"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <Button id="" className="btn-2">
                  Add to cart
                </Button>
              </div>
            </div>
          </Col>

          <Col className="col">
            <div className="col-main">
              <div className="image-main">
                <div className="image-1">
                  <img src={CardImg2} alt="" />
                </div>
                <p className="text">Add to wishlist</p>
              </div>
              <div className="main2">
                <div className="head-main">
                  <h6>rolling nature good luck mone...</h6>
                  <p>height: 30cm</p>
                </div>
                <div className="head2">
                  <h6 className="h6">
                    USD 770.00 <span>USD 660.00</span>
                  </h6>
                </div>

                <div className="in-main">
                  <label>Pot: </label>
                  <input
                    placeholder="20cm"
                    className="input-2"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <Button id="" className="btn-2">
                  Add to cart
                </Button>
              </div>
            </div>
          </Col>

          <Col className="col">
            <div className="col-main">
              <div className="image-main">
                <div className="image-1">
                  <img src={CardImg3} alt="" />
                </div>
                <p className="text">Add to wishlist</p>
              </div>
              <div className="main2">
                <div className="head-main">
                  <h6>rolling nature good luck mone...</h6>
                  <p>height: 30cm</p>
                </div>
                <div className="head2">
                  <h6 className="h6">
                    USD 770.00 <span>USD 660.00</span>
                  </h6>
                </div>

                <div className="in-main">
                  <label>Pot: </label>
                  <input
                    placeholder="20cm"
                    className="input-2"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <Button id="" className="btn-2">
                  Add to cart
                </Button>
              </div>
            </div>
          </Col>

          <Col className="col">
            <div className="col-main">
              <div className="image-main">
                <div className="image-1">
                  <img src={CardImg4} alt="" />
                </div>
                <p className="text">Add to wishlist</p>
              </div>
              <div className="main2">
                <div className="head-main">
                  <h6>rolling nature good luck mone...</h6>
                  <p>height: 30cm</p>
                </div>
                <div className="head2">
                  <h6 className="h6">
                    USD 770.00 <span>USD 660.00</span>
                  </h6>
                </div>

                <div className="in-main">
                  <label>Pot: </label>
                  <input
                    placeholder="20cm"
                    className="input-2"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <Button id="" className="btn-2">
                  Add to cart
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="c-1" id="c-2" fluid="xxl">
        <img id="back22" src={Background1} alt="" />
        <div className="left">
          <h6>Plants&Pots</h6>
          <h1 className="bold">
            <b>The Perfect Pot for Your</b>
          </h1>
          <h2>Succulent Plants</h2>
          <p>
            Plants&Pots is a professional producer of ceramic plant pots with a
            natural flexible and stable flexible body.
          </p>
          <Button id="" className="button">
            Check more products
          </Button>
        </div>
        <div className="right">
          <img src={Img1} alt="" />
        </div>
      </Container>


      <Container className="c-4" fluid='xll'>
        <h5 className="hhhh">Plants&Pots</h5>
        <h1>Articles</h1>
        <div className="c4-main">
          <div className="cc-card">
            <div className="img-di di1">
            </div>
            <div className="bt">
              <h6>PLANTS</h6>
              <h5>Capturing nature's beau..</h5>
              <p>Learn tips and techniques to capture stunning photographs of plants, from macro shots of...</p>
              <h5 className='wd'>@WorkDo . May 24, 2023</h5>
              <button>Read More</button>
            </div>
          </div>
          
          <div className="cc-card">
            <div className="img-di di2">
            </div>
            <div className="bt">
              <h6>PLANTS</h6>
              <h5>The Green Thumb's Guid...</h5>
              <p>Dive into sustainable gardening practices that promote biodiversity, conserve water, and...</p>
              <h5 className='wd'>@WorkDo . May 24, 2023</h5>
              <button>Read More</button>
            </div>
          </div>
          <div className="cc-card">
            <div className="img-di di3">
            </div>
            <div className="bt">
              <h6>PLANTS</h6>
              <h5>A Guide to Low-...</h5>
              <p>Delve into the enchanting world of succulents and learn how these hardy plants can thrive in various... </p>
              <h5 className='wd'>@WorkDo . May 24, 2023</h5>
              <button>Read More</button>
            </div>
          </div>
          <div className="cc-card">
            <div className="img-di di4">
            </div>
            <div className="bt">
              <h6>PLANTS</h6>
              <h5>Transforming Your Spac...</h5>
              <p>Dive into the world of indoor plants and learn how to create a serene and refreshing oasis in...</p>
              <h5 className='wd'>@WorkDo . May 24, 2023</h5>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </Container>
      <Container className="bg-f" fluid='xll'>
        <h5>Plants&Pots</h5>
        <h1>Plant your dreams, and <span>watch them grow!</span></h1>
        <p>These high-quality, smartly designed plant pots are produced in an environmentally-friendly way with automatic production lines and quality assurance.</p>
        <div className="play"><AiOutlinePlayCircle className="playi"/>play video</div>
      </Container>

      <Container className="c-3" fluid="xll">
        <Row className="row11">
          <Col className="zoom zoomm11" xs={6}>
            <div className="zoom-d">
              <img src={Zoom1} alt="" />
            </div>
            <div className="upper up1">
              <div className="all-main up-main1">
                <h5 className="green">Plants&pots</h5>
                <h5>
                  Get started with pots and <span>plants, today!</span>
                </h5>
                <p>
                  We use the latest in technology and technology-related costs
                  to make our products
                </p>
                <button>Show more</button>
              </div>
            </div>
          </Col>
          <Col className="zoom zoomm22">
            <div className="zoom-d">
              <img src={Zoom3} alt="" />
            </div>
            <div className="upper up2">
              <div className="all-main">
                <h5 className="green">Plants&pots</h5>
                <h5>
                  A journey into the
                  <span>Life of plants</span>
                </h5>
                <p>
                  We use the latest in technology and technology-related costs
                  to make our products
                </p>
                <button>Show more</button>
              </div>
            </div>
          </Col>
          <Col className="zoom zoomm33">
            <div className="zoom-d">
              <img src={Zoom2} alt="" />
            </div>
            <div className="upper">
              <div className="all-main">
                <h5>Plants&pots</h5>
                <h5>
                  Nature's Silent
                  <span>Gaurdians</span>
                </h5>
                <p>
                  We use the latest in technology and technology-related costs
                  to make our products
                </p>
                <button className="black-up">Show more</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  {/*  */}
  <Slider/>
      <Footer/>
    </>
  );
};

export default Home;
