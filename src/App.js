import './App.css';
import TalentLIst from './pages/TalentLIst';
import Home from './pages/Home';
import Teams from './pages/Teams';
import LoginFreelancer from './pages/LginFreelancer';
import JobList from './pages/JobList';
import JobDetails from './components/JobDetails';
import UserProfile from './pages/UserProfile';
import PageB from './pages/PageB';
import LoginCompany from './pages/LoginCompany';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyProfile from './pages/CompanyProfile';
import PostOffer from './pages/PostOffer';
import UpdateAccount from './pages/UpdateAccount';
import MyProfileCompany from './pages/MyProfileCompany';
import MyProfileUser from './pages/MyProfileCompany';
import Remove from './removeit';


function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/talent" element={<TalentLIst />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/login-freelancer" element={<LoginFreelancer />} />
            <Route path="/login-company" element={<LoginCompany/>} />
            <Route path="/sign-up" element={<SignUp />} />
            < Route path="/home/talent" element={<TalentLIst />} />
            < Route path="/job-list" element={<JobList />} />
            <Route path="/create-job" element={<PostOffer />} />
            < Route path="/job-details" element={<JobDetails />} />
            < Route path="/teams" element={<Teams />} />
            < Route path="/update" element={<UpdateAccount />} />
            < Route path="/company/my-profile" element={<MyProfileCompany />} />
            < Route path="/user/my-profile" element={<MyProfileUser />} />
            <Route path="redux" element={<Remove/>}/>
          </Routes>
        </Router>

     
    
  );
}

export default App;
