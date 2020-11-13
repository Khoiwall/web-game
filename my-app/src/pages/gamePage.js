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
function GamePage() {
  return (
    <div className="Game page">
      <Info></Info>
      <Review></Review>
      <Required></Required>
      <ImgCarousel></ImgCarousel>
      <LinkGame></LinkGame>
      <Comment></Comment>
    </div>
  );
}

export default GamePage;