import './App.css';
import {Navbar} from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AccessibilityAnimation from './components/accessibility/AccessibilityAnimation';
import FamilyPage from './components/pages/FamilyPage';
import JobsPage from './components/pages/JobsPage';
import Footer from './components/Footer/Footer';
import FindsPage from './components/pages/FindsPage';
import ContactPage from './components/pages/ContactPage';

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
                <Route path="/jobs" element={<JobsPage/>}/>
                <Route path="/finds" element={<FindsPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
          </div>
        </Router>
        <Footer/>
    </>
  );
}

export default App;
