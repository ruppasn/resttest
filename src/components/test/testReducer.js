export default (state={ count: 3}, action) => {

    switch(action.type) {
        case 'someAction':
            console.log(state, action)
            return { ...state, count: action.someValue}
        case 'restActionSuccess':
            console.log('rest action called', action)
            return { ...state, restData: action.response}
        default: 
            return {...state}
    }
}