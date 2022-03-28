const initialState = {
    logged : false
}
const CheckLoggin = (state = initialState, action)=>{
    switch(action.type){
        case "login": return {
            ...state,
            logged : true
        }
        case "logout" : return{
            ...state,
            logged : false
        }
        default : return state

    }
}
export default CheckLoggin