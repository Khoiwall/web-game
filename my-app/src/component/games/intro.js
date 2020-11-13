import React, {Component} from 'react'
import image from './img/ResidentEvilResistance.png'
class Intro extends Component{
    render(){
        return(
            <div className='intro'>
                <div className='product-image'>
                    <img src={image} alt='ResidentEvilResistance'/>
                </div>
                <div className='product-info'>
                    <div className="card-title">
                        THÔNG TIN GAME
                    </div>
                    <ul className='infos'>
                        <li>
                            <p className='data-label'>LOẠI:</p>
                            <p className='info'>Game</p>
                        </li>
                        <li>
                            <p className='data-label'>PHÁT HÀNH:</p>
                            <p className='info'>01/11/2020</p>
                        </li>
                        <li>
                            <p className='data-label'>CẬP NHẬT:</p>
                            <p className='info'>02/11/2020</p>
                        </li>
                        <li>
                            <p className='data-label'>PHIÊN BẢN:</p>
                            <p className='info'>Online</p>
                        </li>
                        <li>
                            <p className='data-label'>PHÁT TRIỂN:</p>
                            <p className='info'>CAPCOM Co., Ltd. NeoBards Entertainment Ltd.</p>
                        </li>
                        <li>
                            <p className='data-label'>XUẤT BẢN:</p>
                            <p className='info'>CAPCOM Co., Ltd</p>
                        </li>
                        <li>
                            <p className='data-label'>LOẠT GAME:</p>
                            <p className='info'>ResidentEvilResistance</p>
                        </li>
                        <li>
                            <p className='data-label'>MULTIPLAYER:</p>
                            <p className='info'>LAN, Online</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Intro;