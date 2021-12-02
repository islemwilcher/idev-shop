
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//pages
import Home from './pages/Home'
import Categories from './pages/Categories'

//components
import Navbar from './components/navbar/Navbar'
import AllNewProducts from "./pages/AllNewProducts"
import AllBestProducts from "./pages/AllBestProducts"
import Product from "./pages/Product"
import Signin from "./admin/signin/Signin"




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route exact path='/categories/:category' element={<Categories/>} />
          <Route exact path='/products/new/all' element={<AllNewProducts/>} />
          <Route exact path='/products/best/all' element={<AllBestProducts  />} />
          <Route exact path='/products/find/:id' element={<Product />} />
          <Route exact path='/signin' element={<Signin />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
