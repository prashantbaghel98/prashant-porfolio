import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import RootbixPage from './Pages/Company Page/RootbixPage'
import Home from './Pages/Home'
import WebsLoginPage from './Pages/Company Page/WebsLoginPage'
import InternshipPage from './Pages/Company Page/InternshipPage'



function App() {

  return (
    <>
     <Navbar/>
     
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/experience/rootbix' element={<RootbixPage/>} /> */}
      {/* <Route path='/experience/webslogin' element={<WebsLoginPage/>} /> */}
       {/* <Route path='/experience/codsoft' element={<InternshipPage/>} /> */}
    </Routes>
     <Footer/>
    
    

    
    </>
  )
}

export default App
