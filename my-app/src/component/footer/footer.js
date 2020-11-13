import React, { Component } from "react";
import '../asset/css/header-banner.css';
import '../asset/css/footer.css';
import { Link } from "react-router-dom";
import logo from './image/logo-2.png'

class Footer extends Component{
    render(){
        return(
            <footer id="colophon" className="site-footer">
                <div className="footer-main">
                    <div className="container">
                        <div className="footer-row">
                            <div className="info-footer">
                                <div className="info-logo">
                                    <Link to="/" title="logo homepage"><img src={logo} alt="logo"></img></Link>
                                    <div className="info-text"><p>Cộng đồng chia sẻ nội dung, kiến thức hữu ích về công nghệ và giải trí</p></div>
                                </div>
                                <div className="contact-footer">
                                    <div className="contact">
                                        <h3>Liên hệ</h3>
                                    </div>
                                    <ul className="info-contact">
                                        <li className="phone">+84792545700</li>
                                        <li className="email">MailtoWork1402@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="info-footer">
                                <div className="info-fanpage">
                                    <h3>Fanpage</h3>
                                    <p>Join Us on Facebook</p>
                                </div>
                            </div>
                            <div className="info-footer">
                                <div className="row-1">
                                    <div className="sum-view">
                                        <h2>3123123</h2>
                                        <p>Tổng lượt xem</p>
                                    </div>
                                    <div className="active-online">
                                        <h2>321</h2>
                                        <p>Online</p>
                                    </div>
                                </div>
                                <div className="social-network">
                                    <h2>Mạng Xã Hội</h2>
                                    <p>Theo dõi các mạng xã hội để có được những thông tin mới nhất</p>
                                    <ul>
                                        <li><a href="fb.com">Facebook</a></li>
                                        <li>Facebook</li>
                                        <li>Facebook</li>
                                        <li>Facebook</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="container"></div>
                </div>
            </footer>
        )
    }
}

export default Footer;