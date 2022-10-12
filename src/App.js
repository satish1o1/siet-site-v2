
import './App.css';
import ProfilePage from './pages/profile/profile-page';
import Navigation from './components/navigation/navigation.component'
import SignIn from './pages/signin/signin.page'
import { Route, Routes} from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from './contexts/user.context';
import Marks from './components/marks/marks.component';
import UpdateMarks from './components/update-marks/update-marks.component';
import LookUp from './components/look-up/look-up.component';
import Jobs from './components/jobs/jobs.component';
import Coding from './components/coding/coding.component';
import Materials from './components/materials/material.component';
const App = () => {
  const {CurrentUser} = useContext(UserContext)
  return (
    <Routes> 
      <Route path="/" element={<Navigation />}>
        <Route index element={<SignIn />} />
        <Route path= "profile" element={<ProfilePage />} />
        <Route path = '/marks' element={<Marks user = {CurrentUser} />} />
        <Route path = '/update_marks' element={<UpdateMarks user = {CurrentUser} />} />
        <Route path = '/look_up' element={<LookUp />} />
        <Route path = '/jobs' element={<Jobs />} />
        <Route path = '/coding' element={<Coding />} />
        <Route path = '/material' element={<Materials />} />
      </Route> 
  </Routes>
  );
};

export default App;
