import './App.css';
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Upload from './Pages/Upload'
import Saved from './Pages/Saved'
import NotesContext from './Context/NotesContext';
import UserContext from './Context/UserContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <UserContext>
    <NotesContext>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          <Route path='/Upload' element={<Upload />} />
          <Route path='/Saved' element={<Saved />} />

        </Routes>
      </BrowserRouter>
    </NotesContext> 
    </UserContext>
  )
}

export default App;
