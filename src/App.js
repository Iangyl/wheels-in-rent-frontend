import React, { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import routes from './modules/routes/routes';
import { Home,
  Fleet,
  ContactUs,
  NotFound,
  PageUnderConstruction,
} from './pages';

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
          <Route exact path={routes.OFFERS} element={<PageUnderConstruction />}/>
          <Route exact path={routes.BLOG} element={<PageUnderConstruction />}/>
          <Route exact path={routes.ABOUT_US} element={<PageUnderConstruction />}/>
          <Route exact path={routes.SIGN_IN} element={<PageUnderConstruction />}/>
          <Route exact path={routes.SIGN_UP} element={<PageUnderConstruction />}/>
          <ProtectedRoute>
            <Route exact path={routes.ACCOUNT} element={<PageUnderConstruction />}/>
          </ProtectedRoute>
          <ProtectedRoute>
            <Route exact path={routes.ADMIN_DASHBOARD} element={<PageUnderConstruction />}/>
          </ProtectedRoute>
          <ProtectedRoute>
            <Route exact path={routes.ADMIN_CREATE_CAR} element={<PageUnderConstruction />}/>
          </ProtectedRoute>
          <Route path={routes.NOT_FOUND} element={<NotFound />}/>
          <Route path='*' element={<NotFound />}/>
        </Fragment>
      </Routes>
    </div>
  );
}

export default App;
