import React, { Component } from 'react'
import '../asset/css/category.css'
import Category from './category'
class Review extends Component{
    render(){
        const {game} = this.props
        return(
        <div className='Layout'>
            <div className='review'>
                <div className='review-title'>
                    GIỚI THIỆU GAME <span>{game.name}</span> 
                </div>
                <div className='review-body'>
                    <p>
                        {game.description.numberOne}
                        <br></br><br></br>
                        {game.description.numberTwo}
                        <br></br><br></br>
                        {game.description.numberThree}
                        <br></br><br></br>
                        {game.description.numberFour}
                        <br></br><br></br>
                        {game.description.numberFive}
                    </p>
                </div>
            </div>
                <Category game={game}></Category>
      </div>
          
        )
    }
}
export default Review;