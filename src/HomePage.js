import React, { useEffect, useState } from 'react'
import CharacterTables from './CharacterTables'
import LoaderHomePage from './LoaderHomePage'

export function HomePage() {
    const [characterInformation, setCharacterInformation] = useState([]) 
    const [isLoadingTableСharacters, setIsLoadingTableСharacters] = useState(true)

    const sortName = () => {
        console.log("0")
    }

    useEffect(() => {
        fetch('/characters')
            .then(result => result.json())
            .then(
                (result) => {
                    setCharacterInformation(result)
                    setIsLoadingTableСharacters(false)
                }
    )}, [])

    return(
        <div>
            { isLoadingTableСharacters ? <LoaderHomePage /> : <CharacterTables characterInformation={characterInformation} sortName={sortName} />
            }
        </div>
    );
}
//json-server --watch db.json