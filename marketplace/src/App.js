import logo from './logo.svg';
import './App.css';
import DisplayAllProducts from "./Products/DisplayAllProducts";
import DisplayProduct from "./Products/DisplayProduct";
import SignUp from "./User/SignUp";
import CreateProduct from "./Products/CreateProduct";
import Login from "./User/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
     <Router>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/users" element={<SignUp />} />
            <Route path="/products" element={<DisplayAllProducts />} /> {/* Use element prop instead of component */}
            <Route path="/product/:id" element={<DisplayProduct />} /> {/* Use element prop instead of component */}
            <Route path="/create-product" element={<CreateProduct />} />
            </Routes>
     </Router>
  );
}

export default App;
