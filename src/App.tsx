import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import SecondLayout from './layouts/SecondLayout';
import Dashboard from './components/Dashboard';
import Settings from './pages/Settings';
import Tables from './pages/Tables'
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup'


function App() {
  return (
    <div className="App flex">
      <Routes>

        {/* MAIN LAYOUT */}
        
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/Settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
        <Route
          path="/Tables"
          element={
            <MainLayout>
              <Tables />
            </MainLayout>
          }
        />


        {/* SECOND LAYOUT */}

        <Route path="/Login"
          element={
            <SecondLayout>
              <Login />
            </SecondLayout>
          } />
          <Route path="/Signup"
          element={
            <SecondLayout>
              <Signup />
            </SecondLayout>
          } />
          <Route path="/landing"
          element={
            <SecondLayout>
              <Landing />
            </SecondLayout>
          } />
        <Route path="/Profile"
          element={
            <SecondLayout>
              <Profile />
            </SecondLayout>
          } />

      </Routes>
    </div>
  );
}

export default App;
