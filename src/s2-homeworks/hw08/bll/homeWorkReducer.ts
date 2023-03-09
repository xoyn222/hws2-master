import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const copyState = [...state]
            if (action.payload === 'up'){
                return   copyState.sort((a,b)=>a.name>b.name?1:-1)
            }
            if (action.payload === 'down'){
                return   copyState.sort((a,b)=>a.name<b.name?1:-1)
            }
            return state // need to fix
        }
        case 'check': {
            const filteredState = state.filter(e=>e.age>18)
            // filteredState.sort((a,b)=>a.age-b.age)
            return filteredState
        }
        default:
            return state
    }
}