import './App.css';
import Home from './components/home';
import AddUser from './components/addUser';
import CurrUser from './components/currUser';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<AddUser />} />
        <Route path="/user/:id" element={<CurrUser />} />
      </Routes>
    </div>
  );
}

export default App;
