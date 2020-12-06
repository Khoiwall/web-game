import React,{Component} from 'react'
import BannerPageGames from '../component/page-games/banner-page-games.js'
import NavMobile from '../component/header/nav-mobile'
import Search from '../component/search/search'
import Footer from '../component/footer/footer.js'
import ListGame from '../component/page-games/listGame'
import { Helmet } from 'react-helmet';
import axios from 'axios'
import Loading from '../component/loader/loading.js'
class PageGames extends Component{
    constructor(props){
        super(props);
        this.state = {
            listGame: [],
            name: ''
        }
    }
    componentWillMount(){
        axios.get('http://localhost:5000/games/list-game')
        .then(res=>{
            this.setState({
                listGame: res.data
            })
        })
        .catch(()=>console.log('khoi'))
        axios.get('http://localhost:5000/user/ApiUserLogin')
        .then(res=>{
            this.setState({
                name: res.data.name
            })
        })
        .catch(()=>console.log('khoi'))
    }
    render(){
        const {name,listGame} = this.state
        const {q} = this.props
        if (listGame.length !== 0){
            var games = []
            function gameTitle(){
                if (q === 'game'){
                    return listGame
                }
                else{
                    for (var i = 0; i < listGame.length; i++){
                        if (listGame[i].category[0] === q || listGame[i].category[1] === q || listGame[i].category[2] === q){
                            games.push(listGame[i])
                        }
                    }
                }
                return games
            }
            return(
                <div className="page-games">
                    <Helmet>
                        <title> {q} </title>
                    </Helmet>
                    <div className="header banner relative">
                        <NavMobile></NavMobile>
                        <BannerPageGames name={name}/>
                        <Search/>
                    </div>
                    <div className="content">
                        <ListGame q={q} listGame={gameTitle()}/>
                    </div>
                        <Footer/>
                </div>
            )
        }
        else{
            return(
                <Loading></Loading>
            )
        }
    }
}

export default PageGames;