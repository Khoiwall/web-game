import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HomePage from './pages/homepage.js';
import LoginPage from './pages/loginpage.js';
import SingUpPage from './pages/signuppage.js';
import GamePage from './pages/gamePage.js'
import Loading from './component/loader/loading.js'
import PageGames from './pages/pageGames.js'
import CreateGame from './pages/createGame'
import axios from 'axios'
import SearchGame from './pages/pageSearchGame';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      listgame: [],
      linkgames: [
        {"link": '/kindgames/action-games', "q": "Hành động"},
        {"link": '/kindgames/action-games/fps-games', "q": "Bắn súng góc nhìn thứ nhất"},
        {"link": '/kindgames/action-games/third-person-shooter-games', "q": "Bắn súng góc nhìn thứ 3"},
        {"link": '/kindgames/action-games/hack-and-slash-games', "q": "Chặt chém"},
        {"link": '/kindgames/adventure-games', "q": "Phiêu lưu"},
        {"link": '/kindgames/adventure-games/rpg-games', "q": "Nhập vai"},
        {"link": '/kindgames/adventure-games/horror-games', "q": "Kinh dị"},
        {"link": '/kindgames/adventure-games/open-world-games', "q": "Thế giới mở"},
        {"link": '/kindgames/adventure-games/survival-games', "q": "Sinh tồn"},
        {"link": '/kindgames/adventure-games/stealth-games', "q": "Stealth"},
        {"link": '/kindgames/strategy-games', "q": "Chiến thuật"},
        {"link": '/kindgames/strategy-games/turn-based-games', "q": "Theo lượt"},
        {"link": '/kindgames/strategy-games/rts-games', "q": "Thời gian thực"},
        {"link": '/kindgames/strategy-games/tower-defense-games', "q": "Thủ thành"},
        {"link": '/kindgames/emulator-games', "q": "Giả lập"},
        {"link": '/kindgames/emulator-games/ps1-games', "q": "Giả lập PS1"},
        {"link": '/kindgames/emulator-games/ps2-games', "q": "Giả lập PS2"},
        {"link": '/kindgames/emulator-games/psp-games', "q": "Giả lập PSP"},
        {"link": '/kindgames/emulator-games/wiiu-games', "q": "Giả lập WiiU"},
        {"link": '/kindgames/sport-games', "q": "Thể Thao"},
        {"link": '/kindgames/sport-games/racing-games', "q": "Đua xe"},
        {"link": '/kindgames/sport-games/football-games', "q": "Bóng đá"},
        {"link": '/kindgames/sport-games/fishing-games', "q": "Câu cá"},
        {"link": '/kindgames/sport-games/basketball-games', "q": "Bóng rổ"},
        {"link": '/kindgames/sport-games/goft-games', "q": "Goft"},
        {"link": '/kindgames/sport-games/wrestling-games', "q": "Đấu vật"},
        {"link": '/kindgames/sport-games/baseball-games', "q": "Bóng chày"},
        {"link": '/kindgames/sport-games/tesnis-games', "q": "Tesnis"},
        {"link": '/kindgames/sport-games/pool-games', "q": "Bi-a"},
        {"link": '/kindgames/different-games', "q": "Khác"},
        {"link": '/kindgames/different-games/indie-games', "q": "Indie"},
        {"link": '/kindgames/different-games/simulation-games', "q": "Mô phỏng"},
        {"link": '/kindgames/different-games/multiplayer-game', "q": "Multiplayer"},
        {"link": '/kindgames/different-games/puzzle-games', "q": "Giải đố - trí tuệ"},
        {"link": '/kindgames/different-games/point-and-click-games', "q": "Point & Click"},
        {"link": '/kindgames/different-games/side-scroller-games', "q": "Side Scrolling"},
        {"link": '/kindgames/different-games/fighting-games', "q": "Đối kháng"},
        {"link": '/kindgames/different-games/card-games', "q": "Thẻ bài"},
        {"link": '/kindgames/different-games/vietnames-games', "q": "Việt hóa"},
        {"link": '/kindgames/different-games/gog-games', "q": "GOG"},
      ]
    }
  }
  componentWillMount(){
    axios.get('http://localhost:5000/games/list-game')
    .then(res=>{
        this.setState({
          listgame: res.data
        })
    })
    .catch(()=>console.log('Error'))
}
  render(){
    const {listgame,linkgames} = this.state
    if (listgame.length > 0){
      return (
        <Router>
          <div className="App">
              <Route path='/' exact component={HomePage}><HomePage/></Route>
              <Route path='/login' exact component={LoginPage}><LoginPage/></Route>
              <Route path='/sign-up' exact component={SingUpPage}><SingUpPage/></Route>
              <Route path='/games' exact component={PageGames}><PageGames q={'game'}/></Route>
              <Route path='/games/search' exact component={SearchGame}><SearchGame/></Route>
              <Route path='/admin/create-game'exact component={CreateGame}></Route>
              {linkgames.map((linkgame)=>(
                <Route path={linkgame.link} exact component={PageGames}><PageGames q={linkgame.q}/></Route>
              ))}
              {listgame.map((game,index)=>(
                <Route path={"/games/" + game.namePage} exact component={GamePage} key={index} ><GamePage game={game}/></Route>
              ))}
          </div>
        </Router>
      );
    }
    else{
      return(
        <Loading/>
      )
    }
  }
}

export default App;
