import React, { Component } from 'react'
class Category extends Component{
    render(){
        const {game} = this.props
        return(
            <div className='category'>
                <div className='category-title'>
                    THỂ LOẠI
                </div>
                <div className='list-category'>
                    {game.category.map((item,index) =>(
                        <span key={index}>{item}</span>
                    ))}
                </div>
            </div>
        )
    }
}
export default Category;