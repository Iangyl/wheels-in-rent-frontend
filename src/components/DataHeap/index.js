import React, {useEffect, useState} from "react";
import styles from './index.module.scss'

const Label = ({name}) => {
  const [color, setColor] = useState('#fff');

  useEffect(() => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setColor('#' + randomColor);
  }, [])

  return (
    <div style={{backgroundColor: color}}>{name}</div>
  )
}

const DataHeap = ({data}) => {
  const [search, setSearch] = useState('');
  
  return (
    <div className={styles.DataHeap}>
      <div className={styles.searchContainer}>
        <input
          type='text'
          value={search}
          onChange={setSearch}
          placeholder={data ? 'Search by name' : 'Nothing to search'}
          disabled={data ?? true}
        />
      </div>
      <div className={styles.body}>
        {
          data ? data.map(item => <Label key={item.name} name={item.name} />) : ''
        }
      </div>
    </div>
  )
}

export default DataHeap
