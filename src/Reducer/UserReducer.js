const reducer = (state, action) => {
    switch (action.type) {

        case 'LOGIN_USER':
            const {email,firstname,lastname} = action.payload
            localStorage.clear()
            localStorage.setItem('email', email)
            localStorage.setItem('firstname', firstname)
            localStorage.setItem('lastname', lastname)
            if (action.payload) {
                return {
                    ...state,
                    authorized:true,
                    useremail:email,
                    load:false
                }
            }
            return {
                ...state,
                authorized:false,
                load:false
            }
        case 'SIGNIN_USER':
            if (action.payload) {
                return {
                    ...state,
                    authorized: true,
                    load:false
                }
            }
            return {
                ...state,
                authorized:false,
                load:false
            }
            case"LOAD":
            return{
                ...state,
                load:false
            }
      
        default:
            return {
                ...state,
                authorized:false,
                load:false

            }
    }
}
export default reducer
