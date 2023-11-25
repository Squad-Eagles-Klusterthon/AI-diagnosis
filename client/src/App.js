import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css';
import { Appointment } from './pages/test';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Landing } from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>

  );
}

export default App;