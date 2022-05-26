import React, { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import routes from './modules/routes/routes';
import {
  Home,
  Fleet,
  ContactUs,
  OffersPage,
  NotFound,
  SignIn,
  SignUp,
  Car,
  PageUnderConstruction,
} from './pages';

const App = () => {
  const user = 'user'
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
          <Route exact path={routes.OFFERS} element={<OffersPage />}/>
          <Route exact path={routes.BLOG} element={<PageUnderConstruction />}/>
          <Route exact path={routes.ABOUT_US} element={<PageUnderConstruction />}/>
          <Route exact path={routes.CAR} element={<Car />}/>
          <Route exact path={routes.SIGN_IN} element={<SignIn />}/>
          <Route exact path={routes.SIGN_UP} element={<SignUp />}/>
          <Route
            path={routes.ACCOUNT}
            element={
              <ProtectedRoute user={user}>
                <PageUnderConstruction />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.ADMIN_DASHBOARD}
            element={
              <ProtectedRoute user={user}>
                <PageUnderConstruction />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.ADMIN_CREATE_CAR}
            element={
              <ProtectedRoute user={user}>
                <PageUnderConstruction />
              </ProtectedRoute>
            }
          />
          <Route path={routes.PAGE_UNDER_CONSTRUCTION} element={<PageUnderConstruction />}/>
          <Route path={routes.NOT_FOUND} element={<NotFound />}/>
          <Route path='*' element={<NotFound />}/>
        </Fragment>
      </Routes>
    </div>
  );
}

export default App;
