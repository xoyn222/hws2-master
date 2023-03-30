export type InitStatePropsType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitStatePropsType = initState, action: ChangeThemeIdAT): InitStatePropsType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}


type ChangeThemeIdAT = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdAT => ({ type: 'SET_THEME_ID', id }) // fix any