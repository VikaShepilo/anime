import React from 'react'

const CharacterTables = (props) => {
    return (
        <div className="conteinetTableAndFilter">
            <input type="text" />
            <div className="characterInformationAndFilter">
                <table className="tableCharacterInformation">
                    <thead>
                        <tr>
                            <th>Персонаж</th>
                            <th onClick={() => {props.sortCharactersInformation('characterName')}}>Имя</th>
                            <th onClick={() => {props.sortCharactersInformation('technique')}}>Количество изученных техник</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.characterInformation.map(characterInformation => (  
                            <tr key = {characterInformation.id}>      
                                <td><img src={characterInformation.img} alt={characterInformation.characterName} width="210" height="260" /></td>
                                <td>{characterInformation.characterName}</td>
                                <td>{characterInformation.technique}</td>
                                <td>{characterInformation.specification}</td>
                            </tr>    
                        ))}
                    </tbody>
                </table>
                <div>
                    <div className="radioEvil">
                        <div><input type="radio" id="contactChoice1" name="contact" value="email" onChange={() => {props.radioAllCharacters('evil')}} /> Все персонажи</div>
                        <div><input type="radio" id="contactChoice2" name="contact" value="email2" onChange={() => {props.radioNotEvilCharacters('evil')}} /> На стороне добра</div>
                        <div><input type="radio" id="contactChoice3" name="contact" value="email3" onChange={() => {props.radioEvilCharacters('evil')}} /> На стороне зла</div>
                    </div>
                    <button className="buttoСhangeling" onClick={() => {props.sortCharactersInformation('id')}}> Вернуть первоначальный порядок </button>
                </div>
            </div>
        </div>
    );
}

export default CharacterTables
