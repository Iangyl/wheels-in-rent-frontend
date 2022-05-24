import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

import images from '../../../../assets/images';
import Icon from '../../../../components/Icon';
import Button from '../../../../components/Button';

const ContactUs = () => {
  const onSubmit = (e) => {
    console.log('event Submit: ', e)
  }

  return (
    <div className={styles.ContactUs}>
      <div className='wrapper'>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Contact us 
              <small>we love conversations. let us talk!</small>
            </h2>
            <form onSubmit={onSubmit} className={styles.form}>
              <input type='text' className={classNames(styles.inputName, styles.input)} placeholder='Enter full name' />
              <input type='email' className={classNames(styles.inputEmail, styles.input)} placeholder='Enter email address' />
              <input type='text' className={classNames(styles.inputMessage, styles.input)} placeholder='Tell us about your message' />
              <Button type='submit' placeholder='Send Message' className={classNames(styles.button, styles.input)} />
            </form>
          </div>
          <div className={styles.right}>
            <Icon src={images.pictures.contactus} className={styles.pict} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
