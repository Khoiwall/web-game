import React, { Component } from 'react'
class Required extends Component{
    render(){
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
                                <div className='required-detail'>WINDOWS® 7, 8.1, 10 (64-BIT Required)</div>
                            </li>
                            <li>
                                <div className='required-label'>PROCESSOR:</div>
                                <div className='required-detail'>Intel® Core™ i5-4460 or AMD FX™-6300 or better</div>
                            </li>
                            <li>
                                <div className='required-label'>MEMORY:</div>
                                <div className='required-detail'>8 GB RAM</div>
                            </li>
                            <li>
                                <div className='required-label'>GRAPHICS:</div>
                                <div className='required-detail'>NVIDIA® GeForce® GTX 760 or AMD Radeon™ R7 260x with 2GB Video RAM</div>
                            </li>
                            <li>
                                <div className='required-label'>DIRECTX:</div>
                                <div className='required-detail'>Version 11</div>
                            </li>
                            <li>
                                <div className='required-label'>NETWORK:</div>
                                <div className='required-detail'>Broadband Internet connection</div>
                            </li>
                            <li>
                                <div className='required-label'>STORAGE:</div>
                                <div className='required-detail'>45 GB available space</div>
                            </li>
                            <li>
                                <div className='required-label'>ADDITIONAL NOTE:</div>
                                <div className='required-detail'>Anticipated performance at these specifications is 1080p/30FPS for Resident Evil 3 and 720p/30FPS for Resident Evil Resistance. If you don't have enough graphics memory to run the game at your selected texture quality, you must go to Options > Graphics and lower the texture quality or shadow quality, or decrease the resolution. An internet connection is required for product activation. In addition, an internet connection is required at all times when playing Resident Evil Resistance. (Network connectivity uses Steam® developed by Valve® Corporation.)</div>
                            </li>

                        </ul>
                        <div className='list-required'>RECOMMENDED</div>
                        <ul className='required-info'>
                            <li>
                                <div className='required-label'>OS:</div>
                                <div className='required-detail'>WINDOWS® 10 (64-BIT Required)</div>
                            </li>
                            <li>
                                <div className='required-label'>PROCESSOR:</div>
                                <div className='required-detail'>Intel® Core™ i7-3770 or AMD FX™-9590 or better</div>
                            </li>
                            <li>
                                <div className='required-label'>MEMORY:</div>
                                <div className='required-detail'>8 GB RAM</div>
                            </li>
                            <li>
                                <div className='required-label'>GRAPHICS:</div>
                                <div className='required-detail'>NVIDIA® GeForce® GTX 1060 or AMD</div>
                            </li>
                            <li>
                                <div className='required-label'>DIRECTX:</div>
                                <div className='required-detail'>Version 12</div>
                            </li>
                            <li>
                                <div className='required-label'>NETWORK:</div>
                                <div className='required-detail'>Broadband Internet connection</div>
                            </li>
                            <li>
                                <div className='required-label'>STORAGE:</div>
                                <div className='required-detail'>45 GB available space</div>
                            </li>
                            <li>
                                <div className='required-label'>ADDITIONAL NOTE:</div>
                                <div className='required-detail'>Anticipated performance at these specifications is 1080p/60FPS. An internet connection is required for product activation. In addition, an internet connection is required at all times when playing Resident Evil Resistance. (Network connectivity uses Steam® developed by Valve® Corporation.)</div>
                            </li>

                        </ul>
                    </div>
                </div>
        )
    }
}
export default Required;