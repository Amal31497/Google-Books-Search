import React, { createContext, useReducer, useContext } from "react";
import {
    LOAD_BOOKS,
    ADD_BOOK
} from "./actions"

const BookContext = createContext();
const { Provider } = BookContext;

const reducer = (state, action) => {
    switch (action.type) {
        case LOAD_BOOKS:
            return {
                ...state,
                books: action.books
            }
        case ADD_BOOK:
            return {
                ...state,
                books: [action.book, ...state.books],
            }
        default:
            return state
    }
}


const BookProvider = ({ value = {}, ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        books: []
    })

    return <Provider value={[state, dispatch]} {...props} />
}

const useBookContext = () => {
    return useContext(BookContext)
}

export { BookProvider, useBookContext }