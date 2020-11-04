import React, { Component } from 'react';
import '../asset/css/header-banner.css'
import {
    Link
} from "react-router-dom";

class Games extends Component{
    render(){
        return(
            <div className="dropdown-megamenu absolute">
                <div className="games-model">
                    <div className="games-item">
                        <div className="games-column">
                            <ul>
                                <li><Link title="action game" to="/games/action-games">Hành động</Link></li>
                                <li><Link title="action game" to="/games/action-games/fps-games">Bắn súng góc nhìn thứ nhất</Link></li>
                                <li><Link title="action game" to="/games/action-games/third-person-shooter-games">Bắn súng góc nhìn thứ 3</Link></li>
                                <li><Link title="action game" to="/games/action-games/hack-and-slash-games">Chặt chém</Link></li>
                            </ul>
                            <ul>
                                <li><Link title="action game" to="/games/adventure-games">Phiêu lưu</Link></li>
                                <li><Link title="action game" to="/games/adventure-games/rpg-games">Nhập vai</Link></li>
                                <li><Link title="action game" to="/games/adventure-games/horror-games">Kinh dị</Link></li>
                                <li><Link title="action game" to="/games/adventure-games/open-world-games">Thế giới mở</Link></li>
                                <li><Link title="action game" to="/games/adventure-games/survival-games">Sinh tồn</Link></li>
                                <li><Link title="action game" to="/games/adventure-games/stealth-games">Stealth</Link></li>
                            </ul>
                        </div>
                        <div className="games-column">
                            <ul>
                                <li><Link title="action game" to="/games/strategy-games">Chiến thuật</Link></li>
                                <li><Link title="action game" to="/games/strategy-games/turn-based-games">Theo lượt</Link></li>
                                <li><Link title="action game" to="/games/strategy-games/rts-games">Thời gian thực</Link></li>
                                <li><Link title="action game" to="/games/strategy-games/tower-defense-games">Thủ thành</Link></li>
                            </ul>
                            <ul>
                                <li><Link title="action game" to="/games/emulator-games">Giả lập</Link></li>
                                <li><Link title="action game" to="/games/emulator-games/ps1-games">Giả lập PS1</Link></li>
                                <li><Link title="action game" to="/games/emulator-games/ps2-games">Giả lập PS2</Link></li>
                                <li><Link title="action game" to="/games/emulator-games/psp-games">Giả lập PSP</Link></li>
                                <li><Link title="action game" to="/games/emulator-games/wiiu-games">Giả lập WiiU</Link></li>
                            </ul>
                        </div>
                        <div className="games-column">
                            <ul>
                                <li><Link title="action game" to="/games/sport-games">Thể thao</Link></li>
                                <li><Link title="action game" to="/games/sport-games/racing-games">Đua xe</Link></li>
                                <li><Link title="action game" to="/games/sport-games/football-games">Bóng đá</Link></li>
                                <li><Link title="action game" to="/games/sport-games/fishing-games">Câu cá</Link></li>
                                <li><Link title="action game" to="/games/sport-games/basketball-games">Bóng rổ</Link></li>
                                <li><Link title="action game" to="/games/sport-games/goft-games">Goft</Link></li>
                                <li><Link title="action game" to="/games/sport-games/wrestling-games">Đấu vật</Link></li>
                                <li><Link title="action game" to="/games/sport-games/baseball-games">Bóng chày</Link></li>
                                <li><Link title="action game" to="/games/sport-games/tesnis-games">Tesnis</Link></li>
                                <li><Link title="action game" to="/games/sport-games/pool-games">Bi-a</Link></li>
                            </ul>
                        </div>
                        <div className="games-column">
                            <ul>
                                <li><Link title="action game" to="/games/different-games">Khác</Link></li>
                                <li><Link title="action game" to="/games/different-games/indie-games">indie</Link></li>
                                <li><Link title="action game" to="/games/different-games/simulation-games">Mô phỏng</Link></li>
                                <li><Link title="action game" to="/games/different-games/multiplayer-game">Multiplayer</Link></li>
                                <li><Link title="action game" to="/games/different-games/puzzle-games">Giải đố - trí tuệ</Link></li>
                                <li><Link title="action game" to="/games/different-games/point-and-click-games">Point & Click</Link></li>
                                <li><Link title="action game" to="/games/different-games/side-scroller-games">Side Scrolling</Link></li>
                                <li><Link title="action game" to="/games/different-games/fighting-games">Đối kháng</Link></li>
                                <li><Link title="action game" to="/games/different-games/card-games">Thẻ bài</Link></li>
                                <li><Link title="action game" to="/games/different-games/vietnames-games">Việt hóa</Link></li>
                                <li><Link title="action game" to="/games/different-games/gog-games">GOG</Link></li>
                            </ul>
                        </div>
                        <div className="games-column">
                            <ul>
                                <li><Link title="action game" to="/games/action-game/arrange">Sắp xếp</Link></li>
                                <li><Link title="action game" to="/games/action-game/arrange/new-games">Game mới</Link></li>
                                <li><Link title="action game" to="/games/action-game/arrange/hot-games">Xem nhiều nhất</Link></li>
                                <li><Link title="action game" to="/games/action-game/arrange/dow-games">download nhiều nhất</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Games;