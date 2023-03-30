const initState = {
    isLoading: false,
}

export type LoadingStateType = {
    isLoading: boolean
}
export const loadingReducer = (state : LoadingStateType = initState, action: LoadingActionType): LoadingStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case action.type:
            console.log( action.isLoading)
            return {
                ...state,
                isLoading: action.isLoading
            }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})