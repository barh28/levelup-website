import './App.css';
import {Navbar} from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AccessibilityAnimation from './components/accessibility/AccessibilityAnimation';
import FamilyPage from './components/pages/FamilyPage';

function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <AccessibilityAnimation/>
          <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ourFamily" element={<FamilyPage/>}/>
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
