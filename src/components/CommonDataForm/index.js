import React, { useMemo } from "react";
import Button from "../Button";
import styles from './index.module.scss';

const CommonDataForm = ({value, onChange, updateMode = false}) => {
  const handleSumbit = () => {

  }
  const mode = useMemo(() => { return updateMode ? 'Update' : 'Insert' }, [updateMode])
  return (
    <div className={styles.CommonDataForm}>
      <h3>{mode}</h3>
      <form className={styles.form} onSubmit={handleSumbit}>
        <input type='text' value={value} onChange={onChange} placeholder='Enter value' />
        <Button type='submit' className={styles.button} placeholder={mode} />
      </form>
    </div>
  )
}

export default CommonDataForm
