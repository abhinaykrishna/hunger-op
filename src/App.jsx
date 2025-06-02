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

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<RegisterNewUser />} />
      <Route path='forgotPassword' element={<ForgotPassword />} />
      <Route element={<PrivateRoute />}>
        <Route path='/flatSetup' element={<FlatSetup />} />
        <Route path='/createFlat' element={<CreateFlat />} />
        <Route path='/joinFlat' element={<JoinFlat />} />
      </Route>
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
