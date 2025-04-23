import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/SideBar';
import NavBar from '../components/NavBar';

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div>
          <NavBar />
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Layout;
