import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import './App.css'
import './bootstrap.min.css'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import { authContext } from './ContextApi/Context'


function App() {

  const {authStatus}=useContext(authContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dash' element={authStatus?<Dashboard />:<Auth/>} />
        <Route path='/auth' element={<Auth/>} />
         <Route path='/allproject' element={authStatus?<Projects/>:<Auth/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
