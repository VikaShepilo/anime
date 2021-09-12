import React from 'react'
import { Input, Table, Radio, Button } from 'antd'
import { UserOutlined, CloseCircleOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { Link } from "react-router-dom"
import { addCharactersTim } from '../store/actions/actions'
import { useSelector, useDispatch } from 'react-redux'

const CharacterTables = (props) => {
    const tim = useSelector((state) => state.tim.tim)
    const characters = useSelector((state) => state.allCharacters.characters)
    const searchCharacter = useSelector((state) => state.filterCharacters.filterCharacters)
    const dispatch = useDispatch()
    
    const addCharacterInTima = (dataId) => {
        if (tim[1] === "") {
            dispatch(addCharactersTim({
                1: dataId,
                2: "",
                3: "",
            }))
        } else if (tim[2] === "") {
            dispatch(addCharactersTim({
                1: tim[1],
                2: dataId,
                3: "",
            }))
        } else if (tim[3] === "") {
            dispatch(addCharactersTim({
                1: tim[1],
                2: tim[2],
                3: dataId,
            }))
        }
        console.log(tim)
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
                    pathname: `/card`,
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
                    pathname: `/card`,
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
                        value={searchCharacter['characterName']} 
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
                        <Radio.Button onChange={() => {props.onFilterCharacters('')}} value="a">Все персонажи</Radio.Button>
                        <Radio.Button onChange={() => {props.onFilterCharacters(false)}} value="b">На стороне добра</Radio.Button>
                        <Radio.Button onChange={() => {props.onFilterCharacters(true)}} value="c">На стороне зла</Radio.Button>
                    </Radio.Group>
                </div> 
                <Table
                    columns={columns} 
                    dataSource={characters} 
                    rowKey="id" 
                    pagination={false}
                />
            </div>
            <div className="battle">
                <Link to="/fixСharacter">
                    <Button>Redux</Button>
                </Link>
            </div>
        </div>
        
    )
}

export default CharacterTables
