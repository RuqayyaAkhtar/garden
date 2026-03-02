import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { MdKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import CardImg1 from "./plant-imagess/Image10.png";
import CardImg2 from "./plant-imagess/Image8.png";
import CardImg3 from "./plant-imagess/Image4.png";

function Slider() {
  const [count, setCount] = useState(0);
  const handleLeftSlide = () => {
    if (count === -2) {
      setCount(0);
      console.log("if")
    } 
    else if (count > 0) {
      // setCount(0)
      setCount((prevCount) => prevCount - 1);
      console.log("ok")
    }   
    else {
      setCount((prevCount) => prevCount - 1);
      console.log("el")
    }
    console.log(count,"c")
    slideDiv(); 
  };

  
  const handleRightSlide = () => {
    if (count === 2 ) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
    console.log(count,"c1")
    slideDiv1(); 

  };
     

  const slideDiv = () => {
    // Adjust the class or use refs to select the slider element
    const sliderElement = document.querySelectorAll(".slider-long");
    if (sliderElement) {
      sliderElement.forEach(element => {
        element.style.marginLeft = `${count * 100}%`;
      });
    }
  };

  const slideDiv1 = () => {
    // Adjust the class or use refs to select the slider element
    const sliderElement = document.querySelectorAll(".slider-long");
    if (sliderElement) {
      sliderElement.forEach(element => {
        element.style.marginLeft = `-${count * 100}%`;
      });
    }
  };
  return (
    <div>
      <Container className="c-55" fluid='xll'>
        <h5>Plants&Pots</h5>
        <h1>Testimonials</h1>

        <div className="slid-l">
        
         <div className="slider">
       <MdOutlineKeyboardDoubleArrowLeft className="ar-l btn1" id="btn1" onClick={handleLeftSlide}/>
        <MdKeyboardDoubleArrowRight className="ar-r" onClick={handleRightSlide} />
          <div className="slider-long" >
          <div className="slid">
         <FaQuoteLeft className="qt"/>
         <p className="slid-p p5">"Growing my own vegetables and herbs has not only provided me with fresh and flavorful ingredients but also a sense of accomplishment and connection to the Earth."</p>
         <p className="slid-p p52">David Wilson, <span>Home Gardener</span> </p>
         <div className="starr">
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <span>4.8/5.0</span>
         </div>
        </div>
        <div className="slid">
         <FaQuoteLeft className="qt"/>
         <p className="slid-p p5">"The vibrant colors and fragrant blossoms of the diverse plants in my flourishing garden have brought immense joy, serenity, and natural beauty to my life. They truly are nature's masterpiece."</p>
         <p className="slid-p p52">Sarah Thompson, <span>Botanical enthusiast</span> </p>
         <div className="starr">
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <span>4.8/5.0</span>
         </div>
        </div>
        {/*  */}
        <div className="slid">
         <FaQuoteLeft className="qt"/>
         <p className="slid-p p5">"Indoor plants have transformed my workspace into a calm and productive environment. They purify the air and create a refreshing atmosphere that keeps me motivated throughout the day."</p>
         <p className="slid-p p52">Sarah Thompson, <span>Botanical enthusiast</span> </p>
         <div className="starr">
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <span>4.8/5.0</span>
         </div>
        </div>  
          </div>
        </div>

        <div className="slider-r">
          <div className="slider1">
          <div className="slider-long" >
            <div className="slid sl1">
            <div className="col-main col-s">
              <div className="image-main">
                <div className="image-1">
                  <img src={CardImg1} alt="" />
                </div>
                <p className="text">Add to wishlist</p>
              </div>
              <div className="main2">
                <div className="head-main">
                  <h6>set of 3 good luck plants</h6>
                </div>
                <div className="head2">
                  <h6 className="h6">
                    USD 375.00 <span>USD 450.00</span>
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
            </div>
            <div className="slid sl1">
            <div className="col-main col-s">
              <div className="image-main">
                <div className="image-1">
                  <img src={CardImg3} alt="" />
                </div>
                <p className="text">Add to wishlist</p>
              </div>
              <div className="main2">
                <div className="head-main">
                  <h6>rolling nature good luck mone...</h6>
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
            </div>
            {/* // */}
            <div className="slid sl1">
            <div className="col-main col-s">
              <div className="image-main">
                <div className="image-1">
                  <img src={CardImg2} alt="" />
                </div>
                <p className="text">Add to wishlist</p>
              </div>
              <div className="main2">
                <div className="head-main">
                  <h6>rolling nature good luck mone...</h6>
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
            </div>
          </div>
          </div>
        </div>

        </div>
        
   
      </Container>

    </div>
  );
}

export default Slider;
