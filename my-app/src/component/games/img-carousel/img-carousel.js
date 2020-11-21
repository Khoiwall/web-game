import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../img-carousel/img-carousel.css'
import {Carousel} from 'react-bootstrap'
import image1 from '../img/ResidentEvilResistance_pic1.png'
import image2 from '../img/ResidentEvilResistance_pic2.png'
import image3 from '../img/ResidentEvilResistance_pic3.png'
class ImgCarousel extends Component {
  render(){
    const {game} = this.props
    return (
      <div className="Img-Carousel">
          <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={game.imageOne}
                alt={game.name}
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={game.imageTwo}
                alt={game.name}
                />
  
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={game.imageThree}
                alt={game.name}
                />
  
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ImgCarousel;