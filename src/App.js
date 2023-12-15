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
import { Provider } from 'react-redux';
import ProtectedRoute from './redux/ProtectedRoute';
import { store } from './redux/store';
import SoonToBe from './components/scrollFrames/SoonToBe';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar/>
          <AccessibilityAnimation/>
          <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ourFamily" element={<FamilyPage/>}/>
                <Route path="/jobs" element={<JobsPage/>}/>
                <Route element={<ProtectedRoute />}>
                  <Route path="/finds" element={<FindsPage />} />
                </Route>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/login" element={<SoonToBe/>}/>
                <Route path="/register" element={<SoonToBe/>}/>
                <Route path="/aboutUs" element={<SoonToBe/>}/>
                <Route path="/buy" element={<SoonToBe/>}/>
                <Route path="/renovation" element={<SoonToBe/>}/>
                <Route path="/rents" element={<SoonToBe/>}/>
                <Route path="/invests" element={<SoonToBe/>}/>
            </Routes>
          </div>
        </Router>
      </Provider>
      <Footer/>
    </>
  );
}

export default App;
