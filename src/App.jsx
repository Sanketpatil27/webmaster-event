import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Landing from "./components/Landing"
import Blogs from "./components/Blogs"
import About from "./components/About"
import Contact from "./components/Contact"
import FullBlog from "./components/FullBlog"


function App() {

  return (
    <div className="font-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Landing/ >} ></Route>
          <Route path="/Blogs" element={ <Blogs/ >} ></Route>
          <Route path="/About" element={ <About/ >} ></Route>
          <Route path="/Contact" element={ <Contact/ >} ></Route>
          <Route path="/FullBlog" element={ <FullBlog/ >} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
