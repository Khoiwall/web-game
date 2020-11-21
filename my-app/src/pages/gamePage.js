import '../component/asset/css/intro.css'
import '../component/asset/css/review.css'
import '../component/asset/css/required.css'
import '../component/asset/css/link.css'
import '../component/asset/css/comment.css'
import Required from '../component/games/required'
import Info from '../component/games/intro'
import Review from '../component/games/review'
import LinkGame from '../component/games/link'
import Comment from '../component/games/comment'
import  ImgCarousel from '../component/games/img-carousel/img-carousel'
import Footer from '../component/footer/footer.js'
import { Component } from 'react'
import { Helmet } from 'react-helmet';
class GamePage extends Component {
  render(){
    const {game} = this.props
    return (
      <div className="Game page">
        <Helmet>
          <title> {game.name} </title>
        </Helmet>
        <Info game={game}></Info>
        <Review game={game}></Review>
        <Required game={game}></Required>
        <ImgCarousel game={game}></ImgCarousel>
        <LinkGame game={game}></LinkGame>
        <Comment></Comment>
        <Footer></Footer>
      </div>
    );
  }
}

export default GamePage;