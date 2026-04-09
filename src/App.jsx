import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {

  
  return (

    
    <div className="dark:bg-gray-800 duration-200 ">

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>

    
  )
}

export default App