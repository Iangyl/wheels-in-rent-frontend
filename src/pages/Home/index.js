import React from 'react';
import { staticFiles } from '../../assets';
import { BurgerWrapp, PageBanner } from '../../components';
import { AboutUs } from './components';

const { homePage } = staticFiles;

const Home = () => {
  return (
    <BurgerWrapp>
      <PageBanner {...homePage.banner} />
      <AboutUs {...homePage.aboutUs} />
    </BurgerWrapp>
  )
}

export default Home;
