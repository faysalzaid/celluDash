import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chart from './components/chart/Chart';
import Forms from './components/form/Forms';
import Login from './components/login/Login';
import NavBar from './components/navbar/NavBar';
import MainNotifcation from './components/notification/MainNotifcation';
import QuickLinks from './components/quickLinks/QuickLinks';
import Tables from './components/tables/Tables';

function App() {
  return (
    <section className=' relative w-screen h-screen'>

        <NavBar />
        <QuickLinks />
    
        <section className=' components-wrapper fixed top-[80px] right-0 h-[calc(100vh-80px)] flex z-0'>

          <Routes>
            <Route path='/' element={<h1 className=' normal-text w-full h-full text-center flex items-center justify-center text-2xl'>Landing Page</h1>}/>
            <Route path='/tables' element={<Tables />} />
            <Route path='/charts' element={<Chart />} />
            <Route path='/forms' element={<Forms />} />
            <Route path='/auth' element={<Login />} />
            <Route path='/messages' element={<MainNotifcation />} />
          </Routes>

        </section>

    </section>
  );
}

export default App;
