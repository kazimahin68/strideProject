import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <div>
        <p className="text-lg font-bold text-center">Hello there</p>
      </div>
    </>
  );
}

export default App;
