import React from 'react'
import { Link } from "react-router-dom"
import { Input, Button, InputNumber, Select } from 'antd'
import { addCharacter } from '../store/actions/actions'
import { useSelector, useDispatch } from 'react-redux'
const { TextArea } = Input
const { Option } = Select

const AddingСharacter = (props) => {
    const newCharacters = useSelector((state) => state.newCharacter.newCharacter)
    const dispatch = useDispatch()

    const sendCharacters = () => {
         fetch('http://localhost:3000/characters', {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(newCharacters)
         })
            .then((resultArr) => {
                dispatch(addCharacter({
                    'characterName': null,
                    'technique': null,
                    'specification': null,
                    'img': null,
                    'evil': false,
                }))
            })
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
                <form action="" className="air">
                    <div className="form-inner">
                        <div className="stripes-block"></div>
                        <div className="form-row">
                            <label>Имя</label>
                            <Input 
                                type="text" 
                                id="name"
                                required
                                value={newCharacters['characterName']} 
                                onChange={(e) => {dispatch(addCharacter({
                                    'characterName': e.target.value,
                                    'technique': newCharacters['technique'],
                                    'specification': newCharacters['specification'],
                                    'img': newCharacters['img'],
                                    'evil': newCharacters['evil'],
                                }))}} 
                            />
                        </div>
                        <div className="form-row">
                            <label>Описание персонажа</label>
                            <TextArea rows={4} 
                                id="description"
                                required
                                value={newCharacters['specification']} 
                                onChange={(e) => {dispatch(addCharacter({
                                    'characterName': newCharacters['characterName'],
                                    'technique': newCharacters['technique'],
                                    'specification': e.target.value,
                                    'img': newCharacters['img'],
                                    'evil': newCharacters['evil'],
                            }))}}/>
                        </div>
                        <div className="form-row">
                            <label>Вставьте URL изображения персонажа</label>
                            <Input 
                                required
                                type="text" 
                                id="description"
                                value={newCharacters['img']} 
                                onChange={(e) => {dispatch(addCharacter({
                                    'characterName': newCharacters['characterName'],
                                    'technique': newCharacters['technique'],
                                    'specification': newCharacters['specification'],
                                    'img': e.target.value,
                                    'evil': newCharacters['evil'],
                                }))}} 
                                placeholder="https://..." 
                            />
                        </div>
                        <div className="form-row-icon">
                            Количество техник изученных персонажем
                            <InputNumber min={1} max={100} 
                                defaultValue={0} 
                                value={newCharacters['technique']} 
                                onChange={(value) => dispatch(addCharacter({
                                    'characterName': newCharacters['characterName'],
                                    'technique': value,
                                    'specification': newCharacters['specification'],
                                    'img': newCharacters['img'],
                                    'evil': newCharacters['evil'],
                                }))} />
                        </div>
                        <div className="form-row-icon">
                            Персонаж будет 
                            <Select style={{ width: 250 }} 
                                value={newCharacters['evil']} 
                                onSelect={(value, event) => {dispatch(addCharacter({
                                    'characterName': newCharacters['characterName'],
                                    'technique': newCharacters['technique'],
                                    'specification': newCharacters['specification'],
                                    'img': newCharacters['img'],
                                    'evil': value,
                                }))}}>
                                    <Option value={false}>на стороне добра</Option>
                                    <Option value={true}>на стороне зла</Option>
                            </Select>
                        </div>
                        <div className="form-row-icon">                      
                            <input type="submit" onClick={() => {sendCharacters()}} value="Добавить персонажа" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddingСharacter