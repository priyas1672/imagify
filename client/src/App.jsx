import React, { useContext } from 'react'
import {Routes , Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const app = () => {

  const {showLogin} = useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>

      <ToastContainer position = 'bottom-right'/>
     <Navbar/>      
     { showLogin && <Login/>}

      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/result' element={<Result></Result>}/>
        <Route  path='/buy' element={<BuyCredit></BuyCredit>}/>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default app



// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1 className="text-6xl bg-red-500 text-white p-10">
//   TAILWIND TEST
// </h1>

//     </div>
//   )
// }

// export default App

