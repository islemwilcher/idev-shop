
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom"

//pages
import Home from './pages/Home'
import Categories from './pages/Categories'

//components
import Navbar from './components/navbar/Navbar'
import Protectedroute from './components/protectedroute/Protectedroute'

//pages
import AllNewProducts from "./pages/AllNewProducts"
import AllBestProducts from "./pages/AllBestProducts"
import Product from "./pages/Product"

//protected pages
import Signin from "./admin/signin/Signin"
import Dashboard from "./admin/dashboard/pages/Dashboard"
import AddProduct from './admin/dashboard/pages/ManageProducts'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* private route */}
          <Route exact path='/dashboard' element={<Protectedroute />} >
            <Route exact path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route exact path='/manageProducts' element={<Protectedroute />} >
            <Route exact path='/manageProducts' element={<AddProduct />} />
          </Route>
          {/* app route */}
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
