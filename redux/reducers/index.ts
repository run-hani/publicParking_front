import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import users from './userReducer.ts'
import boards from './boardReducer.ts'

const rootReducer = (state:any, action:any) => {
    if (action.type === HYDRATE) {
    return {
        ...state,
        ...action.payload,
        };
    }
    return combineReducers({
      users,
      boards
    })(state, action)
}
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
