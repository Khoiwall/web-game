import React,{Component} from 'react'
import '../component/asset/css/header-banner.css'
import Banner from '../component/banner/Banner'
import Search from '../component/search/search'

class HomePage extends Component{
    render(){
        return(
            <div className="header banner relative">
                <Banner/>
                <Search/>
            </div>
        )
    }
}

export default HomePage