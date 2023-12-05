
import './App.css';
import MainForm from './Component/MainForm';
import Chatroom from './Component/Chatroom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
      <Router>

        <Routes>

        <Route index  element={<MainForm/>}></Route>

          
          <Route path="/chat/:roomName"  element={<Chatroom/>}></Route>

          <Route path="*"  element={<h1>404 not found</h1>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
