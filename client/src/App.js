import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css';
import { Appointment } from './pages/test';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>

  );
}

export default App;