import React, { useEffect, useState } from 'react'
import CharacterTables from './CharacterTables'
import LoaderHomePage from './LoaderHomePage'

export function HomePage() {
    const [isLoadingTableСharacters, setIsLoadingTableСharacters] = useState(true)
    const [characterInformation, setCharacterInformation] = useState([]) 
    const [filterInfo, setFilterInfo] = useState('/characters') 
    const [searchStr, setSearchStr] = useState("")
    const [searchArr, setSearchArr] = useState([])
    const [sortedField, setSortedField] = useState(true);

    const handleChangeStr = (str) => { 
        setSearchStr(str.target.value)
        const search = searchArr.filter((val) => {
             if (val.characterName.toLowerCase().includes(searchStr.toLowerCase())) {
                return val
            }
            return false
        })
        setCharacterInformation(search)
    }

    const filterEvilCharacters = () => {setFilterInfo('/characters?evil=true')}
    const filterGoodCharacters = () => {setFilterInfo('/characters?evil=false')}
    const filterAllCharacters = () => {setFilterInfo('/characters')}
    
    const sortCharactersInformation = (kew) => {
        const sortArr = characterInformation.sort((a, b) => {
            if (a[kew] < b[kew]) {
                return sortedField === true ? -1 : 1
            }
            if (a[kew] > b[kew]) {
                return sortedField === true ? 1 : -1
            }
            return 0
        })
        setSortedField(!sortedField)
        setCharacterInformation(sortArr)
        }

    useEffect(() => {
        fetch(filterInfo)
            .then(resultArr => resultArr.json())
            .then(
                (resultArr) => {
                    setCharacterInformation(resultArr)
                    setSearchArr(resultArr)
                    setIsLoadingTableСharacters(false)
                }
        )}, [filterInfo])

    return (
        <div>
            { 
            isLoadingTableСharacters ? <LoaderHomePage /> : <CharacterTables 
                characterInformation={characterInformation} 
                sortCharactersInformation={sortCharactersInformation}
                filterEvilCharacters={filterEvilCharacters} 
                filterGoodCharacters={filterGoodCharacters}
                filterAllCharacters={filterAllCharacters}
                handleChangeStr={handleChangeStr}
                searchStr={searchStr}
                />
            }
        </div>
    );
}
//json-server --watch db.json