import { ADD_FEEDBACK, ADD_USER_NAME, TOTAL_SCORE } from "./actionTypes"

export const addUserName = (data) => { 
    return { type : ADD_USER_NAME, payload : data }
}

export const addFeedback = (data) => { 
    return { type : ADD_FEEDBACK, payload : data }
}

export const addTotalScore = (data) => { 
    return { type : TOTAL_SCORE, payload : data }
}