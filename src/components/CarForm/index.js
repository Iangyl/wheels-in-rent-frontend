import React, { useMemo } from "react";
import Button from "../Button";
import styles from './index.module.scss';

const CarForm = ({value, onChange, updateMode = false}) => {
  const handleSubmit = () => {

  }
  const mode = useMemo(() => { return updateMode ? 'Update' : 'Insert' }, [updateMode])
  return (
    <div className={styles.CarForm}>
      <h3>{mode}</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Enter car number'
        />
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Enter model'
        />
        <input
          type='number'
          value={value}
          onChange={onChange}
          placeholder='Enter comfort type'
        />
        <input
          type='number'
          value={value}
          onChange={onChange}
          placeholder='Enter price'
        />
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Enter status'
        />
        <Button type='submit' className={styles.button} placeholder={mode} />
      </form>
    </div>
  )
}

export default CarForm
