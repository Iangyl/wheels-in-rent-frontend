import React, { useMemo } from "react";
import Button from "../Button";
import styles from './index.module.scss';

const ModelForm = ({value, onChange, updateMode = false}) => {
  const handleSubmit = () => {

  }
  const mode = useMemo(() => { return updateMode ? 'Update' : 'Insert' }, [updateMode])
  return (
    <div className={styles.ModelForm}>
      <h3>{mode}</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Enter brand'
        />
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Enter name'
        />
        <input
          type='number'
          value={value}
          onChange={onChange}
          placeholder='Enter engine power'
        />
        <input
          type='number'
          value={value}
          onChange={onChange}
          placeholder='Enter fuel consumption'
        />
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Enter fuel type'
        />
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Enter transmission'
        />
        <input
          type='number'
          value={value}
          onChange={onChange}
          placeholder='Enter max speed'
        />
        <input
          type='number'
          value={value}
          onChange={onChange}
          placeholder='Enter trunk volume'
        />
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Enter body type'
        />
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Enter edition year'
        />
        <textarea
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Enter description'
          className={styles.description}
        />
        <Button type='submit' className={styles.button} placeholder={mode} />
      </form>
    </div>
  )
}

export default ModelForm
