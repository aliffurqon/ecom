//  INI PUNYA RINALDI
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./component/Header";
// import Footer from "./component/Footer";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";

//INI PUNYA ALIF
import { Navbar, Container, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import HeaderAdmin from "./component/admin/Header";
import DashboardAdmin from "./pages/admin/Dashboard/index";
import UserIndex from "./pages/admin/User/Index";
import CreateUser from "./pages/admin/User/Create";
import EditUser from "./pages/admin/User/Edit";
import CategoryIndex from "./pages/admin/Category/Index";
import CreateCategory from "./pages/admin/Category/Create";
import EditCategory from "./pages/admin/Category/Edit";
import ProductsIndex from "./pages/admin/Product/Index";
import CreateProduct from "./pages/admin/Product/Create";
import EditProduct from "./pages/admin/Product/Edit";

function App() {
  return (
    // INI PUNYA RINALDI BAGIAN USER, KALO MAU MAKE TINGGAL DI BUKA AJA KOMENNYA, KALO UDAH GA KE PAKE TINGGAL KOMEN
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/profile" element={<Profile />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>

    //INI PUNYA ALIF BAGIAN ADMIN, KALO MAU MAKE TINGGAL DI BUKA AJA KOMENNYA, kALO UDAH GA KE PAKE TINGGAL KOMEN
    <div>
      <HeaderAdmin />
      <Switch>
        <Route exact path="/" component={DashboardAdmin} />
        <Route exact path="/users" component={UserIndex} />
        <Route exact path="/users/create" component={CreateUser} />
        <Route exact path="/users/update/:id" component={EditUser} />
        <Route exact path="/category" component={CategoryIndex} />
        <Route exact path="/category/create" component={CreateCategory} />
        <Route exact path="/category/update/:id" component={EditCategory} />
        <Route exact path="/products" component={ProductsIndex} />
        <Route exact path="/products/create" component={CreateProduct} />
        <Route exact path="/products/update/:id" component={EditProduct} />
      </Switch>
    </div>
  );
}

export default App;
