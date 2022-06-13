import React from "react";
import styles from './index.module.scss';

import {CommonDataForm, DataHeap, ModelForm, CarForm} from '../../../components';

const DataAdministration = () => {
  return (
    <div className={styles.DataAdministration}>
      <h3>Brands</h3>
      <div className={styles.brandsContainer}>
        <CommonDataForm />
        <DataHeap />
      </div>
      <h3>Models</h3>
      <div className={styles.brandsContainer}>
        <ModelForm />
        <DataHeap />
      </div>
      <h3>Cars</h3>
      <div className={styles.brandsContainer}>
        <CarForm />
        <DataHeap />
      </div>
      <h3>Comfort Types</h3>
      <div className={styles.brandsContainer}>
        <CommonDataForm />
        <DataHeap />
      </div>
      <h3>Offices</h3>
      <div className={styles.brandsContainer}>
        <CommonDataForm />
        <DataHeap />
      </div>
    </div>
  )
}

export default DataAdministration
