import { combineReducers } from 'redux';

import { ADD_FEEDBACK, ADD_USER_NAME, TOTAL_SCORE } from './actionTypes';

const userNameInitialState = { 
    username : ''
}

const feedbackInitialState = { 
    feedback : ''
}

const scoreInitialState = { 
    score : 0
}

const userNameReducer = (state = userNameInitialState, action) => {
    
    switch(action.type) {
        case ADD_USER_NAME :
            return { username : action.payload }
        default :
            return state
    }
};

const feedbackReducer = (state=feedbackInitialState, action) => {
    
    switch(action.type) {
        case ADD_FEEDBACK :
            return { feedback : action.payload }
        default :
            return state
    }
};

const scoreReducer = (state=scoreInitialState, action) => {
    
    switch(action.type) {
        case TOTAL_SCORE :
            return { score : action.payload }
        default :
            return state
    }
};

const rootReducer = combineReducers({userNameReducer, feedbackReducer, scoreReducer})

export default rootReducer;