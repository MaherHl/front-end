import './App.css';
import TalentLIst from './pages/TalentLIst';
import Home from './pages/Home';
import Teams from './pages/Teams';
import LoginFreelancer from './pages/LginFreelancer';
import JobList from './pages/JobList';
import JobDetails from './components/JobDetails';
import UserProfile from './pages/UserProfile';
import PageB from './pages/PageB';
import Companylogin from './pages/LoginCompany';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyProfile from './pages/CompanyProfile';
import PostOffer from './pages/PostOffer';
import UpdateAccount from './pages/UpdateAccount';


function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userP" element={<UserProfile />} />
            <Route path="/TalentL" element={<TalentLIst />} />
            <Route path="/companyP" element={<CompanyProfile />} />
            <Route path="/JB" element={<JobList />} />
            <Route path="/loginF" element={<LoginFreelancer />} />
            <Route path="/loginC" element={<Companylogin />} />
            <Route path="/sign_up" element={<SignUp />} />
           < Route path="/companyP/talentL" element={<TalentLIst />} />
           < Route path="/joblist" element={<JobList />} />
           <Route path="/companyP/postJ" element={<PostOffer />} />
           <Route path="/postJ" element={<PostOffer />} />
           <Route path="/companyP/pageB" element={<PageB />} />
           < Route path="/jobdetails" element={<JobDetails />} />
           < Route path="/teams" element={<Teams />} />
           < Route path="/update" element={<UpdateAccount />} />
       
          </Routes>
        </Router>

     
    
  );
}

export default App;
