import { createContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from '../Reducer/NotesReducer'

const GetDataContext = createContext()

const NotesContext = (props) => {

    const userEmail = localStorage.getItem('email') 
    const initialstate = {
        allnotes: [],
        filternotes: [],
        isLoading: true,
        myUploads: []
    }
    const [state, dispatch] = useReducer(reducer, initialstate)
    const getAllNotes = async () => {
        try {
            const res = await axios.get('https://digibackend.vercel.app/note/alldata')
            dispatch({ type: "ALL_NOTES", payload: res.data })
        }
        catch (error) {
            alert(error)
            console.log('failed to load notes', error)
        }
    }
    useEffect(() => {
        getAllNotes();
    }, [])

    const getSpecificNote = (degree, subject) => {
        if (degree || subject) {
            dispatch({ type: 'GET_SPECIFIC_NOTES', payload: { degree, subject } })
        }
    }
    const myUploadedNotes = async() => {
                if(userEmail)
        dispatch({ type: 'GET_MY_NOTES'})

    }

   

    return (
        <GetDataContext.Provider value={{ ...state, getSpecificNote,myUploadedNotes }}>
            {props.children}
        </GetDataContext.Provider>
    )
}
export { GetDataContext }
export default NotesContext
