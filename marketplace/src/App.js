import './App.css';
import DisplayAllProducts from "./Products/DisplayAllProducts";
import DisplayProduct from "./Products/DisplayProduct";
import SignUp from "./User/SignUp";
import CreateProduct from "./Products/CreateProduct";
import UpdateProduct from "./Products/UpdateProduct";
import Sell from "./Products/Sell";
import Login from "./User/Login";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
     <Router>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="/products" element={<DisplayAllProducts />} />
            <Route path="/product/:id" element={<DisplayProduct />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sell" element={<Sell />} />
            </Routes>
     </Router>
  );
}

export default App;
