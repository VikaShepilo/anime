import React from 'react'
import { Link } from "react-router-dom"
import { selectEnemy, addCharactersTim } from '../store/actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import { CloseCircleOutlined, RedoOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const FixСharacter = (props) => {
    const tim = useSelector((state) => state.tim.tim)
    const characters = useSelector((state) => state.allCharacters.characters)
    const enemyCharacters = useSelector((state) => state.enemyCharacter.enemyCharacter)
    const dispatch = useDispatch()

    const random = () => {
        const len = characters.length
        let newArr = []
        for (let i = 0; i < len; i++) {
            if (characters[i].evil === true) {
                newArr.push(characters[i])
            }
        }
        let enemy = newArr[Math.floor(Math.random() * newArr.length)]
        dispatch(selectEnemy({enemy}))
    }

    const battle = () => {
        let scoreTim = 0
        if (tim[1] === '') {
            scoreTim = 0
        }else if (tim[2] === '') {
            scoreTim = tim[1].technique
        }else if (tim[3] === '') {
            scoreTim = tim[1].technique + tim[2].technique 
        }else if (tim[3] !== '') {
            scoreTim = tim[1].technique + tim[2].technique + tim[3].technique
        }

        if (scoreTim > enemyCharacters.enemy.technique) {
            console.log('победа')
        } else {
            console.log('поражение')
        }
    }

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
                <div className="blockMyTeam">
                    <div className="character-card">
                        <div className="character-card-img">
                            <img src={tim[1].img} alt={tim[1].characterName} />
                        </div>
                        <div className="character-card-list">
                            <h3>{tim[1].characterName}</h3>
                            <span className="character-card-del">
                            <CloseCircleOutlined 
                                onClick={ () =>
                                {dispatch(addCharactersTim({
                                    1: tim[2],
                                    2: tim[3],
                                    3: "",
                                }))
                                }} 
                            />
                            </span>
                        </div>
                    </div>
                    <div className="character-card">
                        <div className="character-card-img">
                            <img src={tim[2].img} alt={tim[2].characterName} />
                        </div>
                        <div className="character-card-list">
                            <h3>{tim[2].characterName}</h3>
                            <span className="character-card-del">
                            <CloseCircleOutlined 
                                onClick={ () =>
                                {dispatch(addCharactersTim({
                                    1: tim[1],
                                    2: tim[3],
                                    3: "",
                                }))
                                }} 
                            />
                            </span>
                        </div>
                    </div>
                    <div className="character-card">
                        <div className="character-card-img">
                            <img src={tim[3].img} alt={tim[3].characterName} />
                        </div>
                        <div className="character-card-list">
                            <h3>{tim[3].characterName}</h3>
                            <span className="character-card-del">
                            <CloseCircleOutlined 
                                onClick={ () =>
                                {dispatch(addCharactersTim({
                                    1: tim[1],
                                    2: tim[2],
                                    3: "",
                                }))
                                }} 
                            />
                            </span>
                        </div>
                    </div>
                </div>
                <Button type="primary" danger onClick={battle}><span className="button-battle">БОЙ</span></Button>
                <div className="character-card">
                    <div className="character-card-img">
                        <img src={enemyCharacters.enemy.img}  alt={enemyCharacters.enemy.characterName} />
                    </div>
                    <div className="character-card-list">
                        <h3>{enemyCharacters.enemy.characterName}</h3>
                        <span className="character-card-del">
                            <RedoOutlined 
                                onClick={random}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixСharacter