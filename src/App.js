import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddService from './components/Dashboard/AddService/AddService';
import Admin from './components/Dashboard/Admin/Admin';
import Dashboard from './components/Dashboard/Dashboard';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<ServiceList></ServiceList>}></Route>
          <Route path='service-list' element={<ServiceList></ServiceList>}></Route>
          <Route path='add-service' element={<AddService></AddService>}></Route>
          <Route path='admin' element={<Admin></Admin>}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
