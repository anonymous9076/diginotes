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
                }
            }
            return {
                ...state,
                authorized:false
            }
        case 'SIGNIN_USER':
            if (action.payload) {
                return {
                    ...state,
                    authorized: true,
                }
            }
            return {
                ...state,
                authorized:false
            }
      
        default:
            return {
                ...state,
                authorized:false
            }
    }
}
export default reducer
