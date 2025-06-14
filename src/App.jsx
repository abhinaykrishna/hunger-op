import { Routes, Route } from 'react-router';
import Login from './components/Login';
import RegisterNewUser from './components/RegisterNewUser';
import LandingPage from './components/LandingPage';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import FlatSetup from './components/FlatSetup';
import CreateFlat from './components/CreateFlat';
import JoinFlat from './components/JoinFlat';
import Home from './components/Home';
import Search from './components/Search';
import Meals from './components/Meals';
import More from './components/More';
import MealCalendar from './components/MealCalendar';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<RegisterNewUser />} />
      <Route path='forgotPassword' element={<ForgotPassword />} />
      {/* <Route element={<PrivateRoute />}> */}
      <Route path='/flatSetup' element={<FlatSetup />} />
      {/* </Route> */}
      <Route path='/dashboard' element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='meals' element={<Meals />} />
        <Route path='more' element={<More />} />
        <Route path='joinFlat' element={<JoinFlat />} />
        <Route path='createFlat' element={<CreateFlat />} />
        <Route path='mealCalendar' element={<MealCalendar />} />
        <Route path='userProfile' element={<UserProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
