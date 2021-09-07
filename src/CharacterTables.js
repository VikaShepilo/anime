import React from 'react'
import { Input, Table, Radio, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { Link } from "react-router-dom"

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
                    <Button type="primary" shape="round"> Добавить в команду </Button>
                )
            }
        }
    },
]

const CharacterTables = (props) => {
    return (
        <div className="container">
            <div className="contant">
                <Input 
                    className="inputForSearchName"
                    type="text" 
                    value={props.searchCharacter} 
                    onChange={props.onSearchName} 
                    placeholder="поиск персонажа" 
                    prefix={<UserOutlined />}
                />
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
        </div>
    );
}

export default CharacterTables
