import React from 'react'
import { Link } from "react-router-dom"
import { Input, Button, InputNumber, Select } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
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
            <div className="header">
                <div className="header-emblem">
                    <Link to="/">
                        <img className="imgEmblem" src="https://wiki.jcdn.ru/w/images/thumb/7/7a/Naruto_anime_logo.png/450px-Naruto_anime_logo.png" alt="naruto" />
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
                Форма для создания нового персонажа
                <div className="form">
                    Имя персонажа: 
                    <Input 
                        type="text" 
                        value={newCharacters['characterName']} 
                        onChange={(e) => {dispatch(addCharacter({
                            'characterName': e.target.value,
                            'technique': newCharacters['technique'],
                            'specification': newCharacters['specification'],
                            'img': newCharacters['img'],
                            'evil': newCharacters['evil'],
                        }))}} 
                        placeholder="имя персонажа" />
                </div>
                <div className="form">
                    Количество техник изученных персонажем:
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
                <div className="form">
                    Описание персонажа:
                    <TextArea rows={4} 
                        value={newCharacters['specification']} 
                        onChange={(e) => {dispatch(addCharacter({
                            'characterName': newCharacters['characterName'],
                            'technique': newCharacters['technique'],
                            'specification': e.target.value,
                            'img': newCharacters['img'],
                            'evil': newCharacters['evil'],
                        }))}}/>
                </div>
                <div className="form">
                    Вставьте URL изображения персонажа:
                    <Input 
                        type="text" 
                        value={newCharacters['img']} 
                        onChange={(e) => {dispatch(addCharacter({
                            'characterName': newCharacters['characterName'],
                            'technique': newCharacters['technique'],
                            'specification': newCharacters['specification'],
                            'img': e.target.value,
                            'evil': newCharacters['evil'],
                        }))}} 
                        placeholder="https://..." />
                </div>
                <div className="form">
                    Персонаж будет:
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
                <Button type="primary" shape="round" onClick={() => {sendCharacters()}}> Добавить персонажа </Button>
            </div>
        </div>
    )
}

export default AddingСharacter