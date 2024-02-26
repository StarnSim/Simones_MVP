import React, { useState } from "react";
import { Carousel, Card } from "react-bootstrap";


export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="container-fluid position-relative" style={{ height: "400px" }}>
        <h1 className="position-absolute top-50 start-50 translate-middle text-center text-white animate-boop">
          Boop the Snoot
        </h1>
        <img
          src="./src/assets/BTS_Images/127-4032x2272.jpg"
          style={{ height: "auto", width: "500" }}
          className="img-fluid"
        
        />
      </div>

      <Carousel activeIndex={index} onSelect={handleSelect} className="text-center">
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




//   return (
//     <>
//       <div className="container-fluid position-relative">
//         <h1 className="position-absolute top-50 start-50 translate-middle text-center text-white">
//           Boop the Snoot
//         </h1>
//         <img
//           src="./src/assets/BTS_Images/127-4032x2272.jpg"
//           className="img-fluid"
        
//         />
//       </div>

      
//       <div className="container mt-3">
//   <Carousel activeIndex={index} onSelect={handleSelect}>
//   <Carousel.Item>
//   <div className="card" style="width: 18rem;">
//   <img src="./src/assets/BTS_Images/image_2.jpg" className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// </Carousel.Item>

//           <Carousel.Item>
//             <div className="d-flex justify-content-around">
//               <div className="card shadow" style={{ width: "18rem" }}>
//                 <img
//                   src="./src/assets/BTS_Images/image_2.jpg"
//                   className="card-img-top img-fluid"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title 2</h5>
//                   <p className="card-text">
//                     This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
//                   </p>
//                   <p className="card-text">
//                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Carousel.Item>

//           <Carousel.Item>
//             <div className="d-flex justify-content-around">
//               <div className="card shadow" style={{ width: "18rem" }}>
//                 <img
//                   src="./src/assets/BTS_Images/image_3.jpg"
//                   className="card-img-top img-fluid"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title 3</h5>
//                   <p className="card-text">
//                     This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
//                   </p>
//                   <p className="card-text">
//                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Carousel.Item>

//           <Carousel.Item>
//             <div className="d-flex justify-content-around">
//               <div className="card shadow" style={{ width: "18rem" }}>
//                 <img
//                   src="./src/assets/BTS_Images/image_4.jpg"
//                   className="card-img-top img-fluid"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title 4</h5>
//                   <p className="card-text">
//                     This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
//                   </p>
//                   <p className="card-text">
//                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Carousel.Item>

//           <Carousel.Item>
//             <div className="d-flex justify-content-around">
//               <div className="card shadow" style={{ width: "18rem" }}>
//                 <img
//                   src="./src/assets/BTS_Images/image_5.jpg"
//                   className="card-img-top img-fluid"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title 5</h5>
//                   <p className="card-text">
//                     This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
//                   </p>
//                   <p className="card-text">
//                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Carousel.Item>

//           <Carousel.Item>
//             <div className="d-flex justify-content-around">
//               <div className="card shadow" style={{ width: "18rem" }}>
//                 <img
//                   src="./src/assets/BTS_Images/image_6.jpg"
//                   className="card-img-top img-fluid"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title 6</h5>
//                   <p className="card-text">
//                     This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
//                   </p>
//                   <p className="card-text">
//                     <small className="text-body-secondary">Last updated 3 mins ago</small>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </>
//   );
// }