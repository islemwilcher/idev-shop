
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//pages
import Home from './pages/Home'
import Categorie from './pages/Categorie'

//components
import Navbar from './components/navbar/Navbar'




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/categorie/:categorie' element={<Categorie/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
