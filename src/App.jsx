
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//pages
import Home from "./pages/Home"

//components
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;