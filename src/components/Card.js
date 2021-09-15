import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'antd'

const Card = (props) => {
    let charecter = props.location.propsSearch

    return (
        <div className="container">
            <div className="header-white">
                <Link to="/">
                    <img className="imgEmblem" src="https://wiki.jcdn.ru/w/images/thumb/7/7a/Naruto_anime_logo.png/450px-Naruto_anime_logo.png" alt="naruto" />
                </Link> 
                <Link to="/battle">
                    <Button type="primary" danger><span className="button-battle">БОЙ</span></Button>
                </Link> 
            </div>
            <div className="header-black">
                <div className="header-menu">
                    <Link to="/addingСharacter">
                        <div className="menu-item">Создать персонажа</div>
                    </Link>
                    <Link to="/battle">
                        <div className="menu-item">Бой</div>
                    </Link>
                    <Link to="/">
                        <div className="menu-item">Выбор команды</div>
                    </Link>
                </div>
                <div className="header-input">
                    
                </div>
            </div>
            <div className="contant">
                <div className="character-card">
                    <div className="character-card-img">
                        <img src={charecter.dataId.img} alt={charecter.dataId.characterName} />
                    </div>
                    <div className="character-card-list">
                        <h3>{charecter.dataId.characterName}</h3>
                        <span className="character-card-del">
                            {charecter.dataId.specification}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card