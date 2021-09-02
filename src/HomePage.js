import React, { useEffect, useState } from 'react'
import CharacterTables from './CharacterTables'
import LoaderHomePage from './LoaderHomePage'

let copyArrCharacters = []

export function HomePage() {
    const [characterInformation, setCharacterInformation] = useState([]) 
    const [isLoadingTableСharacters, setIsLoadingTableСharacters] = useState(true)

    const radioEvilCharacters = (characterKeyEvil) => {
        const resultArrEvilCharacters = copyArrCharacters.filter((newArrCharacters) => { 
            return newArrCharacters[characterKeyEvil] === 1
        })
        setCharacterInformation(resultArrEvilCharacters)
    }

    const radioNotEvilCharacters = (characterKeyEvil) => {
        const resultArrNotEvilCharacters = copyArrCharacters.filter((newArrCharacters) => { 
            return newArrCharacters[characterKeyEvil] === 0
        })
        setCharacterInformation(resultArrNotEvilCharacters)
    }

    const radioAllCharacters = () => {
        setCharacterInformation(copyArrCharacters)
    }
    
    const sortCharactersInformation = (characterKey) => {
        const newArr = characterInformation.concat() 
        const sortArrFromTechnique = newArr.sort(function(a,b){
            if (a[characterKey] < b[characterKey]) return -1 
            if (a[characterKey] > b[characterKey]) return 1 
            return 0
            })
        setCharacterInformation(sortArrFromTechnique) 
    }

    useEffect(() => {
        fetch('/characters')
            .then(result => result.json())
            .then(
                (result) => {
                    copyArrCharacters = result
                    setCharacterInformation(result)
                    setIsLoadingTableСharacters(false)
                }
    )}, [])

    return(
        <div>
            { 
            isLoadingTableСharacters ? <LoaderHomePage /> : <CharacterTables 
                characterInformation={characterInformation} 
                sortCharactersInformation={sortCharactersInformation}
                radioEvilCharacters={radioEvilCharacters} 
                radioNotEvilCharacters={radioNotEvilCharacters}
                radioAllCharacters={radioAllCharacters}
                />
            }
            
        </div>
    );
}
//json-server --watch db.json