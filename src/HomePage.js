import React, { useEffect, useState } from 'react'
import CharacterTables from './CharacterTables'
import LoaderHomePage from './LoaderHomePage'
import AddingСharacter from './AddingСharacter'

export function HomePage() {
    const [isLoadingTableСharacters, setIsLoadingTableСharacters] = useState(true)
    const [characterInformation, setCharacterInformation] = useState([]) 

    const [searchCharacter, setSearchCharacter] = useState({
        characterName: '',
        order: "asc",
        sort: '',
        filter: '',
    }) 

    const onSortCharacters = (sortKey, element) => {
            setSearchCharacter(searchCharacter => ({
                ...searchCharacter,
                sort: sortKey,
                order: element ? 'asc' : 'desc'
            }))  
    }

    const onFilterCharacters = element => {
        setSearchCharacter(searchCharacter => ({
            ...searchCharacter,
            filter: element,
        })) 
    }
    
    const onSearchName = element => {
        setSearchCharacter(searchCharacter => ({
            ...searchCharacter,
            characterName: element.target.value,
        }))
    }

    useEffect(() => {
        const {
            characterName,
            order,
            sort,
            filter
        } = searchCharacter
        const url = `/characters?evil_like=${filter}&characterName_like=${characterName}&_order=${order}&_sort=${sort}`
        
        fetch(url)
            .then(resultArr => resultArr.json())
            .then((resultArr) => {
                    setCharacterInformation(resultArr)
                    setIsLoadingTableСharacters(false)

                }
        )
        
    }, [searchCharacter])
        
    return (
        <div>
            { 
            isLoadingTableСharacters ? <LoaderHomePage /> : (
            <CharacterTables 
                characterInformation={characterInformation} 
                onFilterCharacters={onFilterCharacters}
                onSortCharacters={onSortCharacters}
                onSearchName={onSearchName}
                /> ||
            <AddingСharacter 
                />     
            )}
        </div>
    );
}
//json-server --watch db.json