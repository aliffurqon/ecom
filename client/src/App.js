import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";




function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route exact path= "/" element={<Home/>}/>
            <Route path= "/login" element={<Login/>}/>
            <Route path= "/register" element={<Register/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
