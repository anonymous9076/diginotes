const reducer=(state,action)=>{
    switch(action.type){
        case "ALL_NOTES":
            let data= action.payload
            return{
                ...state,
                notes:data,
                isLoading:false
            }
        
        default:
            return{
            ...state
            }
        
    }
}
export default reducer