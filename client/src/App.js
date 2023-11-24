import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css';
import { Appointment } from './pages/test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>

  );
}

export default App;