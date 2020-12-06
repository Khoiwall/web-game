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
import ImgCarousel from '../component/games/img-carousel/img-carousel'
import Footer from '../component/footer/footer.js'
import DisPlayComment from '../component/games/displayComment'
import { Component } from 'react'
import { Helmet } from 'react-helmet';
import axios from 'axios'
import NavMobile from '../component/header/nav-mobile'
import BannerInGame from '../component/banner/Banner-game.js'
class GamePage extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: '',
    }
}
componentWillMount(){
    axios.get('http://localhost:5000/user/ApiUserLogin')
    .then(res=>{
        this.setState({
            name: res.data.name
        })
    })
    .catch(()=>console.log('khoi'))
}
  render(){
    const {name} = this.state
    const {game} = this.props
    return (
      <div className="game-page">
        <Helmet>
          <title> {game.name} </title>
        </Helmet>
        <NavMobile></NavMobile>
        <BannerInGame game={game} name={name}></BannerInGame>
        <Info game={game}></Info>
        <Review game={game}></Review>
        <Required game={game}></Required>
        <ImgCarousel game={game}></ImgCarousel>
        <LinkGame game={game}></LinkGame>
        <Comment game={game}></Comment>
        <DisPlayComment game={game}></DisPlayComment>
        <Footer></Footer>
      </div>
    );
  }
}

export default GamePage;