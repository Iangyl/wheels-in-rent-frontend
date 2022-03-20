import React from 'react';
import { Route } from 'react-router-dom';
import Button from './components/Button';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
