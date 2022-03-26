import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages';

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Fragment>
          <Route exact path='/' element={<Home />}/>
          <Route path='*' element={<Home />}/>
        </Fragment>
      </Routes>
    </div>
  );
}

export default App;
