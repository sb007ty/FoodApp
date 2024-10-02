import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
