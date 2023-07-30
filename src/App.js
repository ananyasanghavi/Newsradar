import logo from './logo.svg';
import './App.css';
import { Router,Routes,Route } from "react-router-dom";
import './index.css';
import { Profile } from './components/Profile';
import { Landing } from './components/Landing';
import  Home  from './components/Home';
import Login from './components/Login';
import Address from './components/Address';



function App() {
  return (
    <div className="App">
    
    
    <Routes>
      <Route path="/" element={<Landing />}/>
    </Routes>
    <Routes>
      <Route path="/home" element={<Home />}/>
    </Routes>
    <Routes>
      <Route path="/login" element={<Login />}/>
    </Routes>
    
   
    
      
      
    </div>
  );
}

export default App;
