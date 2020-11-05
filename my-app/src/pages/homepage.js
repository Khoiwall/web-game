import React,{Component} from 'react';
import '../component/asset/css/header-banner.css';
import Banner from '../component/banner/Banner';
import Search from '../component/search/search';
import { Helmet } from 'react-helmet';
class HomePage extends Component{
    render(){
        return(
            <div className="header banner relative">
                <Helmet>
                    <title> GameFree - Cộng đồng game free </title>
                </Helmet>
                <Banner/>
                <Search/>
            </div>
        )
    }
}

export default HomePage