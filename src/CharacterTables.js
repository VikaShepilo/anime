import React from 'react'

const CharacterTables = (props) => {
    
    return (
        <div className="conteinetTableAndFilter">
            <input type="text" value={props.searchStr} onChange={props.handleChangeStr} />
            <div className="characterInformationAndFilter">
                <table className="tableCharacterInformation">
                    <thead>
                        <tr>
                            <th onClick={() => {props.sortCharactersInformation('id')}}>
                                Персонаж
                            </th>
                            <th onClick={() => {props.sortCharactersInformation('characterName')}}>
                                Имя
                            </th>
                            <th onClick={() => {props.sortCharactersInformation('technique')}}>
                                Количество изученных техник
                            </th>
                            <th onClick={() => {props.sortCharactersInformation('specification')}}>
                                Описание
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.characterInformation.map(characterInformation => (  
                                <tr key = {characterInformation.id}> 
                                    <td><img src={characterInformation.img} 
                                        alt={characterInformation.characterName} 
                                        width="210" 
                                        height="260" />
                                    </td>
                                    <td>{characterInformation.characterName}</td>
                                    <td>{characterInformation.technique}</td>
                                    <td>{characterInformation.specification}</td>
                                </tr>   
                        ))}
                    </tbody>
                </table>
                <div>
                    <div className="radioEvil">
                        <div>
                            <input 
                            type="radio" 
                            id="contactChoice1" 
                            name="contact"  
                            onChange={() => {props.filterAllCharacters()}} /> 
                                Все персонажи
                        </div>
                        <div>
                            <input 
                            type="radio" 
                            id="contactChoice2" 
                            name="contact" 
                            onChange={() => {props.filterGoodCharacters()}} /> 
                                На стороне добра
                        </div>
                        <div>
                            <input 
                            type="radio" 
                            id="contactChoice3" 
                            name="contact" 
                            onChange={() => {props.filterEvilCharacters()}} /> 
                                На стороне зла
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterTables
