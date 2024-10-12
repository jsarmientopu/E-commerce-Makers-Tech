import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/LandingPage/Home';
import LoginPage from './components/Login';
import { AuthProvider } from './Auth/AuthContext';
import PrivateRoute from './Auth/PrivateRoute';
import HomeNotAuth from './components/LandingPage/HomeNotAuth';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeNotAuth />}>
        <Route path='home' element={<Home />} />
        <Route path="login" element={< LoginPage/>} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
