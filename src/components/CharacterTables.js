import React, { useState } from 'react'
import { Input, Table, Radio, Button } from 'antd'
import { UserOutlined, CloseCircleOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { Link } from "react-router-dom"


const CharacterTables = (props) => {
    const [characterTim, setCharacterTim] = useState({
        1: "",
        2: "",
        3: ""
    })
    
    const addCharacterInTima = (dataId) => {
        if (characterTim[1] === "") {
            setCharacterTim(characterTim => ({
                ...characterTim,
                1: dataId
            }))
        }else if (characterTim[2] === "") {
            setCharacterTim(characterTim => ({
                ...characterTim,
                2: dataId
            }))
        }else if (characterTim[3] === "") {
            setCharacterTim(characterTim => ({
                ...characterTim,
                3: dataId
            }))
        }
        console.log(characterTim)
    }

    const columns = [
        {
            title: 'Персонаж',
            dataIndex: "img",
            render: theImageURL => <img alt={theImageURL} src={theImageURL} />,
        },
        {
            title: 'Имя',
            dataIndex: 'characterName',
            dataId: 'id',
            render: (dataIndex, dataId) => {
                return (
                  <Link to={{
                    pathname: "/card",
                    propsSearch: {dataId}
                }}> {dataIndex}
                  </Link>
                )
            }
        },
        {
            title: 'Количество изученных техник',
            dataIndex: 'technique',
            dataId: 'id',
            render: (dataIndex, dataId) => {
                return (
                  <Link to={{
                    pathname: "/card",
                    propsSearch: {dataId}
                }}> {dataIndex}
                  </Link>
                )
            }
        },
        {
            title: 'Добавить в команду',
            dataId: 'id',
            dataEvil: 'evil',
            render: (dataId, dataEvil) => {
                if (dataEvil.evil) {
                return ( 
                    <Button type="primary" shape="round" disabled> Добавить в команду </Button>
                    )
                }
                if (!dataEvil.evil) {
                    return ( 
                        <Button shape="round" onClick={(e) => {addCharacterInTima(dataId)}}> Добавить в команду </Button>
                    )
                }
            }
        },
    ]

    return (
        <div className="container">
            <div className="header">
                <div className="header-emblem">
                    <Link to="/">
                        <img className="imgEmblem" src="https://wiki.jcdn.ru/w/images/thumb/7/7a/Naruto_anime_logo.png/450px-Naruto_anime_logo.png" alt="naruto" />
                    </Link> 
                </div>
                <div className="header-button-addingСharacter">
                    <Link to="/addingСharacter">
                        <Button>Добавить персонажа</Button>
                    </Link>
                </div> 
                <div className="header-input-character">
                    <Input 
                        className="inputForSearchName"
                        type="text" 
                        value={props.searchCharacter} 
                        onChange={props.onSearchName} 
                        placeholder="поиск персонажа" 
                        prefix={<UserOutlined />}
                        />  
                </div>
                <div className="header-end">
                    <Link to="/">
                        <CloseCircleOutlined className="header-blok-end" />
                    </Link> 
                </div>
            </div>
            <div className="contant">
                
                <div>
                    <Radio.Group>
                        <Radio.Button onChange={() => {props.onSortCharacters('characterName', false)}} value="a">От Я до А</Radio.Button>
                        <Radio.Button onChange={() => {props.onSortCharacters('characterName', true)}} value="b">От А до Я</Radio.Button>
                    </Radio.Group>
                </div>
                <div>
                    <Radio.Group>
                        <Radio.Button onChange={() => {props.onSortCharacters('technique', true)}} value="a">MIN техник</Radio.Button>
                        <Radio.Button onChange={() => {props.onSortCharacters('technique', false)}} value="b">MAX техник</Radio.Button>
                    </Radio.Group>
                </div> 
                <div>  
                    <Radio.Group defaultValue="a">
                        <Radio.Button onChange={() => {props.onFilterCharacters('true||false')}} value="a">Все персонажи</Radio.Button>
                        <Radio.Button onChange={() => {props.onFilterCharacters('false')}} value="b">На стороне добра</Radio.Button>
                        <Radio.Button onChange={() => {props.onFilterCharacters('true')}} value="c">На стороне зла</Radio.Button>
                    </Radio.Group>
                </div> 
                <Table
                    columns={columns} 
                    dataSource={props.characterInformation} 
                    rowKey="id" 
                    pagination={false}
                />
            </div>
            <div className="battle">
            </div>
        </div>
        
    )
}

export default CharacterTables
