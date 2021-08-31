import React from 'react'

const InfoList = (props) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Персонаж</th>
                    <th>Имя</th>
                    <th>Количество изученных техник</th>
                    <th>Описание</th>
                </tr>
            </thead>
            <tbody>
                {props.info.map(info => (  
                    <tr key = {info.id}>      
                        <td><img src={info.img} alt={info.character} width="210" height="260" /></td>
                        <td onMouseOver ={props.sortName}>{info.character}</td>
                        <td>{info.technique}</td>
                        <td>{info.specification}</td>
                        
                    </tr>    
                ))}
            </tbody>
        </table>
    );
}

export default InfoList
