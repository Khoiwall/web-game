import React, {Component} from 'react'
import image from './img/ResidentEvilResistance.png'
class Intro extends Component{
    render(){
        const {game} = this.props
        return(
            <div className='intro'>
                <div className='product-image'>
                    <img src={game.imageBackgourndGames} alt={game.name}/>
                </div>
                <div className='product-info'>
                    <div className="card-title">
                        THÔNG TIN GAME
                    </div>
                    <ul className='infos'>
                        <li>
                            <p className='data-label'>PHÁT HÀNH:</p>
                            <p className='info'> {game.detail.date} </p>
                        </li>
                        <li>
                            <p className='data-label'>CẬP NHẬT:</p>
                            <p className='info'>{game.detail.update}</p>
                        </li>
                        <li>
                            <p className='data-label'>PHIÊN BẢN:</p>
                            <p className='info'>{game.detail.version}</p>
                        </li>
                        <li>
                            <p className='data-label'>PHÁT TRIỂN:</p>
                            <p className='info'>{game.detail.developer}</p>
                        </li>
                        <li>
                            <p className='data-label'>XUẤT BẢN:</p>
                            <p className='info'>{game.detail.publish}</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Intro;