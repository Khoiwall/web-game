import React,{Component} from 'react'
import BannerPageGames from '../component/page-games/banner-page-games.js'
import NavMobile from '../component/header/nav-mobile'
import Search from '../component/search/search'
import Footer from '../component/footer/footer.js'
import SearchGame from '../component/page-games/listGameSearch'
import { Helmet } from 'react-helmet';
import axios from 'axios'
class PageGames extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            listGameSearch: []
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
        axios.get('http://localhost:5000/games/API-search-game')
        .then(res=>{
            this.setState({
                listGameSearch: res.data
            })
        })
        .catch(()=>console.log('khoi'))
    }
    render(){
        const {name,listGameSearch} = this.state
        return(
            <div className="page-games">
                <Helmet>
                    <title> Games </title>
                </Helmet>
                <div className="header banner relative">
                    <NavMobile></NavMobile>
                    <BannerPageGames name={name}/>
                    <Search/>
                </div>
                <div className="content">
                    <SearchGame listGameSearch={listGameSearch}/>
                </div>
                    <Footer/>
            </div>
        )
    }
}

export default PageGames;