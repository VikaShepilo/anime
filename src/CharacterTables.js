import React from 'react'
import { Input, Table, Radio } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

const columns = [
    {
        title: 'Персонаж',
        dataIndex: "img",
        render: theImageURL => <img alt={theImageURL} src={theImageURL} />,
    },
    {
        title: 'Имя',
        dataIndex: 'characterName',
    },
    {
        title: 'Количество изученных техник',
        dataIndex: 'technique',
    },
    {
      title: '',
      dataIndex: '',
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
                <Table columns={columns} dataSource={props.characterInformation} rowKey="id" pagination={false} />
            </div>
        </div>
    );
}

export default CharacterTables
