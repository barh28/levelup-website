import './App.css';
import {Navbar} from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AccessibilityAnimation from './components/accessibility/AccessibilityAnimation';

function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <AccessibilityAnimation/>
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
