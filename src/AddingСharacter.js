import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Input, Button, InputNumber, Select } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

const { TextArea } = Input
const { Option } = Select

const AddingСharacter = (props) => {
    const [characterName, setCharacterName] = useState('') 
    const [technique, setTechnique] = useState('')
    const [specification, setSpecification] = useState('')
    const [img, setImg] = useState('')
    const [evil, setEvil] = useState('')

    const sendCharacters = (e) => {
         const block = {characterName, technique, specification, img, evil}
         console.log(block)
         fetch('http://localhost:3000/characters', {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(block)
         })
            .then((resultArr) => {
                console.log(resultArr)
            })
    }  

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
                Форма для создания нового персонажа
                <div className="form">
                    Имя персонажа: 
                    <Input 
                        type="text" 
                        value={characterName} 
                        onChange={(e) => { setCharacterName(e.target.value)}} 
                        placeholder="имя персонажа" />
                </div>
                <div className="form">
                    Количество техник изученных персонажем:
                    <InputNumber min={1} max={100} 
                        defaultValue={0} 
                        value={technique} 
                        onChange={setTechnique} />
                </div>
                <div className="form">
                    Описание персонажа:
                    <TextArea rows={4} 
                        value={specification} 
                        onChange={(e) => { setSpecification(e.target.value)}}/>
                </div>
                <div className="form">
                    Вставьте URL изображения персонажа:
                    <Input 
                        type="text" 
                        value={img} 
                        onChange={(e) => { setImg(e.target.value)}} 
                        placeholder="https://..." />
                </div>
                <div className="form">
                    Персонаж будет:
                    <Select style={{ width: 250 }} 
                        value={evil} 
                        onSelect={(value, event) => setEvil(value)}>
                            <Option value="true">на стороне зла</Option>
                            <Option value="false">на стороне добра</Option>
                    </Select>
                </div>
                <Button type="primary" shape="round" onClick={() => {sendCharacters()}}> Добавить в команду </Button>
            </div>
        </div>
    )
}

export default AddingСharacter