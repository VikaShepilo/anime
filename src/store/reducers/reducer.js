import { ActionTypes } from "../contants/action-types";

const initialState = {
    characters:[],
    load: true,
    tim: {
        1: "",
        2: "",
        3: ""
    },
    newCharacter: {
        'characterName':null,
        'technique':null,
        'specification':null,
        'img':null,
        'evil': false,
    },
    filterCharacters: {
        'characterName': "",
        'order': "asc",
        'sort': "",
        'filter': "",
    }
}
export const arr = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ARR_CHARACTERS:
            return {...state, characters: payload};
        default:
            return state;
    }
}

export const load = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.LOADER:
            return { state, load: payload};
        default:
            return state;
    }
}

export const tim = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.CHARACTERS_TIM:
            return { state, tim: payload};
        default:
            return state;
    }
}

export const newCharacter = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_CHARACTER:
            return { state, newCharacter: payload};
        default:
            return state;
    }
}

export const filterCharacters = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SORT_CHARACTER:
            return { state, filterCharacters: payload};
        default:
            return state;
    }
}