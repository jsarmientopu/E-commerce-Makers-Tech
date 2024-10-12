import React from "react"
import Navbar from '../navbar/Navbar';
import { useAuth } from '../../Auth/AuthContext';
import NotAuthNavbar from "../navbar/NotAuthNavbar";

const Home=()=>{
  const { setIsAuthenticated, isAuthenticated} = useAuth();
    return(
    <div>
      <Navbar />
      {/* <FloatingChat /> */}
    </div>
    // <LoginPage/>
    )
}

export default Home;