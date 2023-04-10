import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App-container">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
}

export default App;
