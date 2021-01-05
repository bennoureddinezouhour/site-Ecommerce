import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact"
import slid1 from '../slider 3.jpg'
import slid2 from '../slider 6.jpg'
import slid3 from '../slider 7.png'
import slid4 from '../slider9.jpg'

const CarouselPage = () => {
  return (
 
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={slid3}
                alt="First slide"
                style={{height:400}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={slid2}
                alt="Second slide"
                style={{height:400}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={slid1}
                alt="Third slide"
                style={{height:400}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={slid4}
                alt="Third slide"
                style={{height:400}}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
 
  );
}

export default CarouselPage;