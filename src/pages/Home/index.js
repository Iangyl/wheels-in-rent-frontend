import React from 'react';
import { staticFiles } from '../../assets';
import { BurgerWrapp, PageBanner } from '../../components';
import { AboutUs, Offers } from './components';

const { homePage } = staticFiles;

const Home = () => {
  return (
    <BurgerWrapp>
      <PageBanner {...homePage.banner} />
      <AboutUs {...homePage.aboutUs} />
      <Offers {...homePage.offers} />
    </BurgerWrapp>
  )
}

export default Home;
