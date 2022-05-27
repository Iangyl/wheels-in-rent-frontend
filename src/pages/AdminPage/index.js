import React from "react";
import { useLocation } from "react-router";
import Dashboard from './Dashboard';
import DataAdministration from './DataAdministration';
import {BurgerWrapp, AdminWrapper, AboutUs} from '../../components';

const AdminPage = () => {
  const currentPage = 'Dashboard';
  const {pathname} = useLocation();
  const array = pathname.split('/'); 
  const tab = array[array.length-1];
  return (
    <BurgerWrapp>
      <AboutUs title='Admin Page' titleType='h1' />
      <h2 className="wrapper">{currentPage}</h2>
      <AdminWrapper>
        {
          tab === 'dashboard' ? <Dashboard /> : <DataAdministration />
        }
      </AdminWrapper>
    </BurgerWrapp>
  )
}

export default AdminPage
