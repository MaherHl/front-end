
import './App.css';

import TalentLIst from './pages/TalentLIst';
import Home from './pages/Home';
import PageB from './pages/PageB';
import LoginFreelancer from './pages/LginFreelancer';
import JobList from './pages/JobList';
import UserProfile from './pages/UserProfile';


import Companylogin from './pages/LoginCompany';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
  
 
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userP" element={<UserProfile />} />
            <Route path="/pageb" element={<PageB />} />
            <Route path="/JB" element={<JobList />} />
            <Route path="/loginC/loginF" element={<LoginFreelancer />} />
            <Route path="/loginC" element={<Companylogin />} />
           < Route path="/talentL" element={<TalentLIst />} />
          </Routes>
        </Router>

     
    
  );
}

export default App;
