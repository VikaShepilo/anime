import {combineReducers} from 'redux'
import { arr, load, tim, newCharacter, filterCharacters } from './reducers/reducer'

const reducers = combineReducers({
    allCharacters: arr,
    loading: load,
    tim: tim,
    newCharacter: newCharacter,
    filterCharacters: filterCharacters
})

export default reducers;