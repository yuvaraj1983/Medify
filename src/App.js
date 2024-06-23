import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import Home from "./Home/Home.jsx"
import Search from "./Components/Search/Search"
import MyBookings from './MyBookings/MyBookings';
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";


function App() {
  return (
   
    <div className="App">

<div>
      <CssBaseline />
      <Outlet />
      {/* <DownloadApp />
      <Footer /> */}
    </div>

      {/* <Routes>
        <Route exact path="/" element={<Home />}> </Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/my-bookings" element={<MyBookings />}></Route>
      </Routes> */}

 
    </div>

  );
}

export default App;
