import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Pledge from './pages/Pledge';
import Register from './pages/Register';
import Status from './pages/Status';
import Polling from './pages/Polling';
import Guide from './pages/Guide';
import State from './pages/State';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/status" element={<Status />} />
          <Route path="/polling" element={<Polling />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/state" element={<State />} />
        </Routes>
      </div>
    </>
  );
}


export default App;
