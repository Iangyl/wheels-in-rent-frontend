import React from "react";
import Dashboard from './Dashboard';
import DataAdministration from './DataAdministration';
import {BurgerWrapp, AdminWrapper, AboutUs} from '../../components';

const AdminPage = () => {
  const currentPage = 'Dashboard';
  const tab = 'dashboard';
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
