import { createContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from '../Reducer/IndexReducer'
const GetDataContext = createContext()

const Notescontext = (props) => {

    const initialstate = {
        notes: [],
        isLoading : true
    }
    const [state, dispatch] = useReducer(reducer, initialstate)
    const getAllNotes = async() => {
        try {
            const res = await axios.get('http://localhost:8080/note/alldata')
            dispatch({type:"ALL_NOTES", payload:res.data})
        }
        catch (error) {
            alert(error)
            console.log('failed to load notes',error)
        }
    }

    useEffect(() => {
        getAllNotes();
    },[])

    return (
        <GetDataContext.Provider value={{...state}}>
            {props.children}
        </GetDataContext.Provider>
    )
}
export {GetDataContext}
export default Notescontext