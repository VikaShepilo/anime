import { createStore, combineReducers} from 'redux'
import { arr, load, tim, newCharacter, filterCharacters, enemyCharacter } from './reducers/reducer'

const reducers = combineReducers({
    allCharacters: arr,
    loading: load,
    tim: tim,
    newCharacter: newCharacter,
    filterCharacters: filterCharacters,
    enemyCharacter: enemyCharacter
})

export const store = createStore(reducers, {});
