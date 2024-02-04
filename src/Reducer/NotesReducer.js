const reducer=(state,action)=>{
    switch(action.type){
        case "ALL_NOTES":
            let data= action.payload
            return{
                ...state,
                allnotes:data,
                filternotes:data,
                isLoading:false
            }
        case 'GET_SPECIFIC_NOTES':
            const {degree,subject}= action.payload
            console.log(degree,subject)
            if(degree){
                if(subject){
                 return{
                    ...state,
                    isLoading:false,
                    filternotes:state.allnotes.filter((p)=>p.class===degree && p.subject===subject)
                }
                }
                  return{
                        ...state,
                        isLoading:false,
                        filternotes:state.allnotes.filter((p)=>p.class===degree)
                     } 
                  
                }
            else{
                return{
                    ...state,
                    isLoading:false,
                    filternotes:state.allnotes.filter((p)=>p.subject===subject)
                 }
            }    
        case 'GET_MY_NOTES':
           const currentEmail = localStorage.getItem('email')
        return{
            ...state,
            myUploads :state.allnotes.filter((p)=> p.email == currentEmail)
        }

        default:
            return{
            ...state
            }
        
    }
}
export default reducer