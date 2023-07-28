import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import PrivateComp from "./components/PrivateComp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <h1>E-Dashboard</h1>
        <Routes>
          <Route element={<PrivateComp />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={
              <h1>
                <Login />
              </h1>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
