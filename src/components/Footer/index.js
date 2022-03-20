import React from 'react';
import { data } from './footer.config';

import Button from '../Button';
import InfoBlock from './InfoBlock';
import TextInput from '../TextInput';
import styles from './index.module.scss';

const Footer = () => {
  const handlerSubmit = () => {}

  return (
    <div className={styles.Footer}>
      <div className='wrapper'>
        <div className={styles.mainContainer}>
          <div className={styles.container}>
            {
              data.map(item => <InfoBlock key={item.id} {...item} />)
            }
          </div>
          <div className={styles.subscriptionContainer}>
            <h2 className={styles.top}>
              Newsletter Signup
            </h2>
            <form
              className={styles.form}
              onSubmit={handlerSubmit}
            >
              <div>
                <TextInput />
              </div>
              <div>
                <Button className={styles.button} type='submit' placeholder='Send me' />
              </div>
            </form>
            <div className={styles.note}>* Please note - we do not spam your email.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
