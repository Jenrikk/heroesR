import { types } from "../types/types";

// const state = {
//     name: 'Enrique',
//     logged: true
// }

// const loginAction = {
//     type: types.login,
//     payload: {
//         name: 'Enrique',
//         email: 'asdf@gmail.com'
//     }
// }


export const authReducer = (state={}, action) => {
    switch (action.type) {
        case types.login:
            return {
                // name: action.payload.name
                ...action.payload,
                logged: true
            }
        
            case types.logout:
                return {
                    logged: false
                }
    
        default:
            return state;
    }
}