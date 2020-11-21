import React, { Component } from 'react'
class Required extends Component{
    render(){
        const {game} = this.props
        return(
            <div className='required'>
                    <div className='required-title'>
                        CẤU HÌNH
                    </div>
                    <div className='required-body'>
                        <div className='list-required'>MINIMUM</div>
                        <ul className='required-info'>
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
                        <div className='list-required'>RECOMMENDED</div>
                        <ul className='required-info'>
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