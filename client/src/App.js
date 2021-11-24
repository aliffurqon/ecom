import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";




function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route exact path= "/" element={<Home/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
