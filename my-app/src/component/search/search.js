import React, {useState} from 'react';
import '../asset/css/content-homepage.css'

const Search = () =>{
    const [games,setGames] = useState('');
    function handleInputChange(e){
        setGames(e.target.value)
    }
    return(
        <div className="search-games">
            <div className="container padding-left-right">
                <div className="search-box">
                    <form action="/search" method="GET" target="_blank">
                        <input type="text" name="NameGame" id ="NameGame" placeholder="Find Games" className="text_filler style-input" value={games} onChange={handleInputChange}/>
                        <button type="submit" className="search-button">tìm kiếm</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;