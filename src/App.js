import './App.css';
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Upload from './Pages/Upload'
import Saved from './Pages/Saved'
import Notescontext from './Context/IndexContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Notescontext>
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
    </Notescontext> 
  )
}

export default App;
