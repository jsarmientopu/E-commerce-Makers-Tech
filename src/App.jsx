import logo from "./logo.svg";
import "./App.css";
import React, { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import LoginPage from "./components/Login/Login";
import RegisterComponent from "./components/Login/Resgiter";
import LandingPage from "./components/LandingPage/LandingPage";
import ProductListWithPagination from "./components/product/ProductList";
import AdminPage from "./components/Charts/AdminPage";

export const CartContext = React.createContext();

// useEffect(() =>{
//   axios.get(...)
//    .(...)
//   .then(data =>{
//     setUser(data)
//   }
// }, [])

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "T-Shirt", price: 19.99, units: 2 },
    { id: 2, name: "Sneakers", price: 79.99, units: 1 },
    { id: 3, name: "Jeans", price: 39.99, units: 1 },
  ]);
  return (
    // <AuthProvider>
    <CartContext.Provider value={{ items, setItems }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="home" element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<RegisterComponent />} />
            <Route path="products" element={<ProductListWithPagination />} />
            <Route path="statistics" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
