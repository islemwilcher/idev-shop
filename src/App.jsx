
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//pages
import Home from './pages/Home'
import Categories from './pages/Categories'

//components
import Navbar from './components/navbar/Navbar'
import Protectedroute from './components/protectedroute/Protectedroute'

//pages
import AllNewProducts from "./pages/AllNewProducts"
import AllBestProducts from "./pages/AllBestProducts"
import Products from "./pages/Products"
import Product from "./pages/Product"
import Cart from './pages/Cart'

//protected pages
import Signin from "./admin/signin/Signin"
import Dashboard from "./admin/dashboard/pages/Dashboard"
import ManageCategories from "./admin/dashboard/pages/categories/manage/ManageCategories"
import ManageProducts from "./admin/dashboard/pages/products/manage/ManageProducts"

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
            <Route exact path='/manageproducts' element={<Protectedroute />} >
              <Route exact path='/manageproducts' element={<ManageProducts />} />
            </Route>
            <Route exact path='/managecategories' element={<Protectedroute />} >
              <Route exact path='/managecategories' element={<ManageCategories />} />
            </Route>
            {/* app route */}
            <Route path='/' element={<Home/>} />
            <Route exact path='/categories/:category' element={<Categories/>} />
            <Route exact path='/products/new/all' element={<AllNewProducts/>} />
            <Route exact path='/products/best/all' element={<AllBestProducts  />} />
            <Route exact path='/products' element={<Products />} />
            <Route exact path='/products/find/:id' element={<Product />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/signin' element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
