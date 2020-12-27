import { ADD_TODO, TOGGLE_TODO } from './actionTypes'

let nextId = 0
export const addTodo = (contactName) => ({
    type: ADD_TODO,
    id: nextId++,
    contactName
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})