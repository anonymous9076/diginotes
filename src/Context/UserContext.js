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
        useremail:'',
        load:''
    }

    const [state,dispatch] = useReducer(reducer,Initialstate)

    const loginUser = async(object) =>{

        try {
            const res = await axios.post('https://digibackend.vercel.app/user/login', object);
            const userinfo = res.data;
            console.log(userinfo)
            const status = res.status;
            if (status === 200) {
              dispatch({
                type: 'LOGIN_USER',
                payload: userinfo
              });
              alert('Login successfully');
            }
          } catch (error) {
            if (error.response) {
                dispatch({
                    type: 'LOAD',
                  });
              if (error.response.status === 400) {
                alert('Invalid username or password');
              } else {
                alert('Error: ' + error.response.status);
              }
            } else if (error.request) {
             
              alert('No response from server');
            } else {
             
              alert('Error: ' + error.message);
            }
          }
        };
    

    const signinUser = async(object)=>{
        try{
            const res=await axios.post('https://digibackend.vercel.app/user/signin', object)
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
