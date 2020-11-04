import React, {useState} from 'react';

const Search = () =>{
    const [games,setGames] = useState('');
    function handleInputChange(e){
        setGames(e.target.value)
    }
    return(
        <form action="/search" method="GET">
            <input type="text" name="NameGame" id ="NameGame" placeholder="Find Games" value={games} onChange={handleInputChange}/>
            <button type="submit">tìm kiếm</button>
        </form>
    )
}

export default Search;