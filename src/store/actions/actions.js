import { ActionTypes } from "../contants/action-types"

export const setArr = (characters) => {
    return {
        type:ActionTypes.SET_ARR_CHARACTERS,
        payload: characters,
    }
}

export const setLoader = (load) => {
    return {
        type:ActionTypes.LOADER,
        payload: load,
    }
}

export const addCharactersTim = (tim) => {
    return {
        type:ActionTypes.CHARACTERS_TIM,
        payload: tim,
    }
}

export const addCharacter = (newCharacter) => {
    return {
        type:ActionTypes.ADD_CHARACTER,
        payload: newCharacter,
    }
}

export const sortCharacters = (filterCharacters) => {
    return {
        type:ActionTypes.SORT_CHARACTER,
        payload: filterCharacters,
    }
}