import React from 'react';
import { Route } from 'react-router-dom';
import Button from './components/Button';
import Header from './components/Header';

const App = () => {
  const getRoute = item => (
    <Route
      component={item.component}
      path={item.path}
      exact={item.exact}
    />
  )

  return (
    <div className='App'>
      <Header />
      <Button type='button' placeholder='Button' />
    </div>
  );
}

export default App;
