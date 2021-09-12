import React, { useEffect } from 'react'
import CharacterTables from './components/CharacterTables'
import LoaderHomePage from './components/LoaderHomePage'
import AddingСharacter from './components/AddingСharacter'
import { setArr, setLoader, sortCharacters } from './store/actions/actions'
import { useSelector, useDispatch } from 'react-redux'

export function HomePage() {
    const loader = useSelector((state) => state.loading.load)
    const dispatch = useDispatch()
    const searchCharacter = useSelector((state) => state.filterCharacters.filterCharacters)
    const sort = useSelector((state) => state.filterCharacters.filterCharacters.sort)
    const filter = useSelector((state) => state.filterCharacters.filterCharacters.filter)
    const order = useSelector((state) => state.filterCharacters.filterCharacters.order)
    const nameCharacter = useSelector((state) => state.filterCharacters.filterCharacters.characterName)
    console.log(searchCharacter)

    const onSortCharacters = (sortKey, element) => {
        dispatch(sortCharacters({
            ...searchCharacter,
            'characterName': nameCharacter,
            'filter': filter,
            'sort': sortKey,
            'order': element ? 'asc' : 'desc'
        })) 
    }

    const onFilterCharacters = element => {
        dispatch(sortCharacters({
            // ...searchCharacter,
            'characterName': nameCharacter,
            'filter': element,
            'sort': sort,
            'order': order
        }))
    }
    
    const onSearchName = element => {
        dispatch(sortCharacters({
            ...searchCharacter,
            'characterName': element.target.value,
            'filter': filter,
            'sort': sort,
            'order': order
        }))
    }

    useEffect(() => {
        const url = `/characters?evil_like=${filter}&characterName_like=${nameCharacter}&_order=${order}&_sort=${sort}`
        
        fetch(url)
            .then(resultArr => resultArr.json())
            .then((resultArr) => {
                dispatch(setArr(resultArr))
                dispatch(setLoader(false))
                }
        )
    }, [filter, nameCharacter, order, sort, dispatch])
        
    return (
        <div>
            { 
            loader ? <LoaderHomePage /> : (
            <CharacterTables 
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