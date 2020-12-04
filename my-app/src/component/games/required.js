import React, { Component } from 'react'
class Required extends Component{
    render(){
        const {game} = this.props
        return(
            <div className='required container'>
                    <div className='required-title'>
                        CẤU HÌNH
                    </div>
                    <div className='required-body'>
                        <ul className='required-info'>
                            <div className='list-required'><h4>MINIMUM</h4></div>
                            <li>
                                <div className='required-label'>OS:</div>
                                <div className='required-detail'>{game.minimum.os}</div>
                            </li>
                            <li>
                                <div className='required-label'>PROCESSOR:</div>
                                <div className='required-detail'>{game.minimum.processor}</div>
                            </li>
                            <li>
                                <div className='required-label'>MEMORY:</div>
                                <div className='required-detail'>{game.minimum.memory}</div>
                            </li>
                            <li>
                                <div className='required-label'>GRAPHICS:</div>
                                <div className='required-detail'>{game.minimum.graphics}</div>
                            </li>
                            <li>
                                <div className='required-label'>DIRECTX:</div>
                                <div className='required-detail'>{game.minimum.directX}</div>
                            </li>
                            <li>
                                <div className='required-label'>STORAGE:</div>
                                <div className='required-detail'>{game.minimum.storage}</div>
                            </li>

                        </ul>
                        <ul className='required-info'>
                            <div className='list-required'><h4>RECOMMENDED</h4></div>
                            <li>
                                <div className='required-label'>OS:</div>
                                <div className='required-detail'>{game.recommended.os1}</div>
                            </li>
                            <li>
                                <div className='required-label'>PROCESSOR:</div>
                                <div className='required-detail'>{game.recommended.processor1}</div>
                            </li>
                            <li>
                                <div className='required-label'>MEMORY:</div>
                                <div className='required-detail'>{game.recommended.memory1}</div>
                            </li>
                            <li>
                                <div className='required-label'>GRAPHICS:</div>
                                <div className='required-detail'>{game.recommended.graphics1}</div>
                            </li>
                            <li>
                                <div className='required-label'>DIRECTX:</div>
                                <div className='required-detail'>{game.recommended.directX1}</div>
                            </li>
                            <li>
                                <div className='required-label'>STORAGE:</div>
                                <div className='required-detail'>{game.recommended.storage1}</div>
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}
export default Required;