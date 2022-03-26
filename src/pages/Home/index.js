import React from 'react';
import { staticFiles } from '../../assets';
import { BurgerWrapp, PageBanner } from '../../components';

const { homePageBanner } = staticFiles;

const Home = () => {
  return (
    <BurgerWrapp>
      <PageBanner {...homePageBanner.content} />
    </BurgerWrapp>
  )
}

export default Home;
