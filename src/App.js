import React, { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import routes from './modules/routes/routes';
import { Home, Fleet, ContactUs } from './pages';

const App = () => {
  const ProtectedRoute = ({user, redirectPath = routes.SIGN_IN, children}) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }

    return children;
  }
  
  return (
    <div className=''>
      <Routes>
        <Fragment>
          <Route exact path={routes.HOME} element={<Home />}/>
          <Route exact path={routes.FLEET} element={<Fleet />}/>
          <Route exact path={routes.CONTACT_US} element={<ContactUs />}/>
          <Route path='*' element={<Home />}/>
        </Fragment>
      </Routes>
    </div>
  );
}

export default App;
