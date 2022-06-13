import React from 'react';
import { ModalLoader } from '../../';
import { createPortal } from 'react-dom';

import { useWindowSizes } from '../../../assets/hooks';

import styles from './index.module.scss';

const ModalContainer = ({ props }) => {
  const [style, setStyle] = React.useState({})
  const [width] = useWindowSizes()

  React.useEffect(() => {
    if (width === 1366) {
      setStyle({ top: '20%' })
    }
  }, [width])

  const modal = React.useMemo(() => {
    switch (props?.type) {
    case 'loading':
      return <ModalLoader title={props?.title} message={props?.message} />
    default: return ''
    }
  }, [props?.message, props?.title, props?.type])

  return createPortal(
    <div className={styles.modalWrapper} style={style}>
      {modal}
    </div>,
    document.body,
  )
}

export default ModalContainer
