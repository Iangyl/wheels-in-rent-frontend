import React from 'react';
import { staticFiles } from '../../assets';
import { BurgerWrapp, PageBanner } from '../../components';
import { AboutUs, Offers, Blog, Testimonials, ContactUs } from '../../components';

const { homePage } = staticFiles;

const Home = () => {
  return (
    <BurgerWrapp>
      <PageBanner {...homePage.banner} />
      <AboutUs {...homePage.aboutUs} />
      <Offers {...homePage.offers} />
      {/* <Blog {...homePage.blog} /> */}
      <Testimonials {...homePage.testimonials} />
      <ContactUs />
    </BurgerWrapp>
  )
}

export default Home;
