import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../img-carousel/img-carousel.css'
import {Carousel} from 'react-bootstrap'
class ImgCarousel extends Component {
  render(){
    const {game} = this.props
    return (
      <div className="Img-Carousel container">
          <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={game.imageOne}
                alt={game.name}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={game.imageTwo}
                alt={game.name}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={game.imageThree}
                alt={game.name}
                />
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ImgCarousel;