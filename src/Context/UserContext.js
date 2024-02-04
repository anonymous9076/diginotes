import React, { createContext, useReducer } from 'react'
import reducer from '../Reducer/UserReducer'
import axios from 'axios'
const GetUserContext = createContext()

function UserContext(props) {

    const Initialstate={
        userinfo:{
            email:'',
            firstname:'',
            lastname:'',
            token:''
        },
        authorized:false,
        useremail:''
    }

    const [state,dispatch] = useReducer(reducer,Initialstate)

    const loginUser = async(object) =>{
        try {
            const res = await axios.post('http://localhost:8080/user/login', object)
            const userinfo = res.data
            dispatch({
                type:'LOGIN_USER',
                payload:userinfo
            })
            alert('Login successfully')
        }
        catch (error) {
            alert("invalid username or password")
        }
    }

    const signinUser = async(object)=>{
        try{
            const res=await axios.post('http://localhost:8080/user/signin', object)
            dispatch({
                type:'SIGNIN_USER',
                payload:res.data.status
            })
            alert(res.data.status)

        }
        catch(error){
            alert('something went Wrong')
        }
    }

  return (
   <GetUserContext.Provider value={{...state,loginUser,signinUser}}>
    {props.children}
   </GetUserContext.Provider>

  )
}
export {GetUserContext} 
export default UserContext