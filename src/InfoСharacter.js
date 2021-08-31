import React, { useEffect, useState } from 'react'
import InfoList from './InfoList'
import Loader from './Loader'

export function InfoСharacter() {
    const [info, setInfo] = useState([]) // изменить назв. 5 6 7
    const [isLoading, setIsLoading] = useState(true)

    const sortName = () => {
        console.log("0")
    }

    useEffect(() => {
        fetch('/characters')
            .then(result => result.json())
            .then(
                (result) => {
                    setInfo(result)
                    setIsLoading(false)
                }
    )}, [])

    return(
        <div>
            { isLoading ? <Loader /> : <InfoList info={info} sortName={sortName} />
            }
        </div>
    );
}
//json-server --watch db.json