import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Feed } from "./feed";
import { Home } from "./home";
import { Login } from "./login";

import './App.css';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;