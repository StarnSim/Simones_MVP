import React, { useState } from "react";
import { Carousel, Card } from "react-bootstrap";
import "../App.css";

export default function Home() {

  const [topCarouselIndex, setTopCarouselIndex] = useState(0);

  const handleTopCarouselSelect = (selectedIndex) => {
    setTopCarouselIndex(selectedIndex);
  };

  const [bottomCarouselIndex, setBottomCarouselIndex] = useState(0);

  const handleBottomCarouselSelect = (selectedIndex) => {
    setBottomCarouselIndex(selectedIndex);
  };

  return (
    <>
      <div className="container-fluid position-relative" style={{ height: "400px" }}>
        <h1 className="display-1 position-absolute top-50 start-50 translate-middle text-center text-white animate-boop">
          <span style={{ fontSize: "1.5em" }}>Boop the Snoot</span><br/>
          <img
            src="./src/assets/BTS_Images/dog-nose-white.png"
            width="90"
            height="80"
            alt="Logo"
          />
        </h1>
      </div>

      <section className="bg-white text-dark p-8 text-center sticky-top">
        <div className="container" style={{ maxWidth: "80%" }}>
          {/* Top Carousel  */}
          <Carousel activeIndex={topCarouselIndex} onSelect={handleTopCarouselSelect} className="text-center">
            <Carousel.Item>
              <div className="d-sm-flex align-items-center sticky-top">
                <img
                  src="./src/assets/BTS_Images/istockphoto-814928228-2048x2048.jpg"
                  style={{ width: "50%", height: "150" }}
                  alt="Boop the Snoot"
                  className="float-left"
                />
                <div className="flex-grow-1 text-left pl-5">
                  <h2 className="green-text">Welcome to Boop the Snoot Doggy Care</h2>
                  <h4>We provide personalized and loving care for your furry friends! Our doggy care services are designed to cater to the unique needs of each dog, ensuring they have a tail-wagging experience throughout the day.</h4>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="d-sm-flex align-items-center sticky-top">
              <img
                  src="./src/assets/BTS_Images/istockphoto-814928228-2048x2048.jpg"
                  style={{ width: "50%", height: "150" }}
                  alt="Boop the Snoot"
                  className="float-left"
                />
                <div className="flex-grow-1 text-left pl-5">
                  <h2 className="green-text">Explore Our Doggy Play Areas</h2>
                  <h4>Our spacious play areas are designed for dogs to socialize, play, and have a great time together. Safety is our top priority, and our trained staff ensures a fun and secure environment for your furry friends.</h4>
                </div>
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
              <div className="d-sm-flex align-items-center sticky-top">
              <img
                  src="./src/assets/BTS_Images/istockphoto-814928228-2048x2048.jpg"
                  style={{ width: "50%", height: "150" }}
                  alt="Boop the Snoot"
                  className="float-left"
                />
                <div className="flex-grow-1 text-left pl-5">
                  <h2 className="green-text">Explore Our flexible care options:</h2>
                  <h4> Half Day - Delightful activities, playtime, and socialization for pups who need a shorter stay.
                  Full Day - A full day of excitement, activities, companionship, and love from sunrise to sunset—perfect for busy pet parents or dogs who love to socialize all day long.</h4>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="d-sm-flex align-items-center sticky-top">
              <img
                  src="./src/assets/BTS_Images/istockphoto-814928228-2048x2048.jpg"
                  style={{ width: "50%", height: "150" }}
                  alt="Boop the Snoot"
                  className="float-left"
                />
                <div className="flex-grow-1 text-left pl-5">
                  <h2 className="green-text">Happy Dogs, Happy Owners</h2>
                  <h4>At Boop the Snoot Doggy Care, we believe in creating joy for both dogs and their owners. Our dedicated team is committed to providing exceptional care, ensuring that your dog has a tail-wagging experience every visit.</h4>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* Bottom Carousel */}
      <Carousel activeIndex={bottomCarouselIndex} onSelect={handleBottomCarouselSelect} className="text-center">
        <Carousel.Item>
          <Card style={{ color: "white", width: "300px", display: "inline-block", marginTop: "20px", marginBottom: "20px"}}>
            <Card.Img src="./src/assets/BTS_Images/image_15.jpg" />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>Dog Training</Card.Title>
              <Card.Text style={{ color: "black" }}>  We lay the foundations with essential commands and behavior training for a well-behaved companion
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card style={{ color: "white", width: "300px", display: "inline-block", marginTop: "20px", marginBottom: "20px" }}>
            <Card.Img src="./src/assets/BTS_Images/image_1.jpg" />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>Pawsitively Happy</Card.Title>
              <Card.Text style={{ color: "black" }}>Your furry friend will have a tail-wagging good time at our daycare! Join the fun and watch the happiness unfold</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card style={{ color: "white", width: "300px", display: "inline-block", marginTop: "20px", marginBottom: "20px"}}>
            <Card.Img src="./src/assets/BTS_Images/image_2.jpg" />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>Play All Day</Card.Title>
              <Card.Text style={{ color: "black" }}>Unleash the playfulness! Our daycare is a playground for your doggy pals, filled with toys, games, and endless adventures.</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card style={{ color: "white", width: "300px", display: "inline-block", marginTop: "20px", marginBottom: "20px"}}>
            <Card.Img src="./src/assets/BTS_Images/image_3.jpg" />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>Sniff & Socialize</Card.Title>
              <Card.Text style={{ color: "black" }}>Let your pup sniff out new friendships! Our daycare provides a safe and social environment for your four-legged companions.</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card style={{ color: "white", width: "300px", display: "inline-block", marginTop: "20px", marginBottom: "20px" }}>
            <Card.Img src="./src/assets/BTS_Images/image_6.jpg" />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>Cozy Naps & Cuddles</Card.Title>
              <Card.Text style={{ color: "black" }}>After all the excitement, it's naptime! Our cozy corners are perfect for those precious moments of rest and cuddles.</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </>
  );
}