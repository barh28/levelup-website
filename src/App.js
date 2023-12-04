import './App.css';
import {Navbar} from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
