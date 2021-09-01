import React from 'react'

const CharacterTables = (props) => {

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
                {props.characterInformation.map(characterInformation => (  
                    <tr key = {characterInformation.id}>      
                        <td><img src={characterInformation.img} alt={characterInformation.characterName} width="210" height="260" /></td>
                        <td onMouseOver ={props.sortName}>{characterInformation.characterName}</td>
                        <td>{characterInformation.technique}</td>
                        <td>{characterInformation.specification}</td>
                    </tr>    
                ))}
            </tbody>
        </table>
    );
}

export default CharacterTables
