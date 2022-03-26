import React from 'react';
import { Slide } from 'react-slideshow-image';
import { BurgerWrapp } from '../../components';
import { constants } from '../../utils';
import 'react-slideshow-image/dist/styles.css';

const Home = () => {
  const { slideImages } = constants;
  return (
    <BurgerWrapp>
      <div className=''>
        <Slide>
          {
            slideImages.map((image, index) => (
              <div className='each-slide' key={index}>
                <div style={{ backgroundImage: `url(${image.url})`}} />
              </div>
            ))
          }
        </Slide>
      </div>
    </BurgerWrapp>
  )
}

export default Home;
