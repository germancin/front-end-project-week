import {GET_NOTES, ADD_NOTES, DELETE_NOTE, FETCHING, ERROR_GETTING_NOTES, SET_SINGLE_NOTE} from '../actions/';

const initialState = {
    notes: [],
    fetching:false,
    error: null,
    singleNote: [],
};

export const notes_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {...state, fetching: action.fetching};
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload,
                fetching: false,
            };
        case ADD_NOTES:
            return {...state, notes: action.payload};
        case SET_SINGLE_NOTE:
            return {...state, singleNote: action.payload};
        case DELETE_NOTE:
            return {...state, notes: action.payload};
        default:
            return state;
    }
};
