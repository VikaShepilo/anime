import React from 'react'

const CharacterTables = (props) => {
    
    return (
        <div>
            <input 
                type="text" 
                value={props.searchCharacter} 
                onChange={props.onSearchName} 
            />
                <div>
                    <div>
                        <input 
                        type="radio" 
                        name="sortNamesCharacter" 
                        onChange={() => {props.onSortCharacters('characterName', true)}} /> 
                            В алфавитном порядке
                    </div>
                    <div>
                        <input 
                        type="radio" 
                        name="sortNamesCharacter" 
                        onChange={() => {props.onSortCharacters('characterName', false)}} /> 
                            В обратном
                    </div>
                </div>
                <div>
                    <div>
                        <input 
                        type="radio" 
                        name="sortTechniqueCharacters" 
                        onChange={() => {props.onSortCharacters('technique', true)}} /> 
                            MIN техник
                    </div>
                    <div>
                        <input 
                        type="radio" 
                        name="sortTechniqueCharacters" 
                        onChange={() => {props.onSortCharacters('technique', false)}} /> 
                            MAX техник
                    </div>
                </div>
                <div>
                    <div>
                        <input 
                        type="radio" 
                        name="filterOnEvil" 
                        onChange={() => {props.onFilterCharacters('true||false')}} /> 
                            Все персонажи
                    </div>
                    <div>
                        <input 
                        type="radio" 
                        name="filterOnEvil" 
                        onChange={() => {props.onFilterCharacters('false')}} /> 
                            На стороне добра
                    </div>
                    <div>
                        <input 
                        type="radio" 
                        name="filterOnEvil" 
                        onChange={() => {props.onFilterCharacters('true')}} /> 
                            На стороне зла
                    </div>
                </div>
            <div>
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
            </div>
        </div>
    );
}

export default CharacterTables
