import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.jpg';
import slider3 from '../img/slider3.jpg';

function UncontrolledExample() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
  
          <Carousel.Caption> 
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default UncontrolledExample;