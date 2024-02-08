
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Template/Layout'
// import Landing_Page from './pages/Landing_Page'
import Landing_Page from './pages/Landing_Page'
import Signup from './pages/Signup'
import { AboutUs, Account, Home } from './pages'
import Profile_Modal from './components/Header/Modals/Profile_Modal'
import Settings from './pages/Settings'
import Profile_Update from './components/Settings/Profile_Settings/Profile_Update'


function App() {


  return (
    <>
     <div>
    <Routes>
    <Route path='/' element={<Layout />} >
    <Route path='/home' element={<Home />} />
    <Route path='/aboutUs' element={<AboutUs />} />
    <Route path='/account' element={<Account />} />
    <Route path='/settings' element={<Settings />} />
    <Route path='/profile-settings' element={<Profile_Update />} />
    
   
    </Route>

    <Route index element={<Landing_Page />} />
    <Route path='/sign-up' element={<Signup />} />
    <Route path='/modal' element={<Profile_Modal />} />
 


    </Routes>

     </div>
    </>
  )
}

export default App
