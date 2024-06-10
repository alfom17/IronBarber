import Carousel from 'react-bootstrap/Carousel';
import peinado1 from "../assets/peinado1.jpg"
import peinado2 from "../assets/peinado2.jpg"
import peinado3 from "../assets/peinado3.jpg"
import peinado4 from "../assets/peinado4.jpg"
import peinado5 from "../assets/peinado5.jpg"




function HairCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src={peinado1} text="First slide" className='medImg' />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={peinado2} text="First slide" className='medImg' />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={peinado3} text="First slide" className='medImg' />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={peinado4} text="First slide" className='medImg' />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={peinado5} text="First slide" className='medImg' />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HairCarousel;