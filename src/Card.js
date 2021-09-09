import React from 'react'
import { Link } from "react-router-dom"
import { LoginOutlined } from '@ant-design/icons'

const Card = (props) => {
    let charecter = props.location.propsSearch

    return (
        <div className="container">
            <div className="header">
                <div className="header-emblem">
                    <Link to="/">
                        <img className="imgEmblem" src="http://assets.stickpng.com/images/5852cd5c58215f0354495f67.png" alt="naruto" />
                    </Link> 
                </div>
                <div className="header-button-addingСharacter">
                </div> 
                <div className="header-input-character"> 
                </div>
                <div className="header-end">
                    <Link to="/">
                        <LoginOutlined />
                    </Link> 
                </div>
            </div>
            <div className="contant">
                <div className="contCharacterInfo">
                    <div className="cardHeader">
                        <div className="headerName">
                            Карточка персонажа
                        </div>
                    </div>
                    <div className="sectorBase">
                        <div className="blockImgName">
                            <div className="blockImg">
                                <img src={charecter.dataId.img} alt={charecter.dataId.characterName} />
                            </div>
                            <div className="blockNameAndSpec">
                                <div>
                                    Имя: {charecter.dataId.characterName}
                                </div>
                                <div>
                                    Описание: {charecter.dataId.specification}
                                </div>

                            </div>
                        </div>
                        <div>
                            <div>
                                Ученик: 
                            </div>
                            <div>
                                Наставник: 
                            </div>
                            <div>
                                Умение работать в команде: 
                            </div>
                            <div>
                                Скорость выполнения техник:
                            </div>
                            <div>
                                Внутренняя сила:
                            </div>
                            <div>
                                Удача:
                            </div>
                        </div>
                    </div>
                    {/* <Button type="primary" shape="round" onClick={(event) => {}} >
                        Добавить в команду
                    </Button> */}
                </div>
            </div>
        </div>
    )
}

export default Card