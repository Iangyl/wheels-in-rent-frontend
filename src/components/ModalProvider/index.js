import React, { createContext, useCallback, useState } from 'react'
import ModalContainer from './ModalContainer'

const ModalContext = createContext(null)

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState()

  const openModal = useCallback((title = 'Loading', message = 'Please wait...', type = 'loading') => {
    setModal({ title, message, type })
  }, [setModal])

  const openNetworkErrorModal = useCallback((nameFrom, nameTo, type) => {
    setModal({ nameFrom, nameTo, type })
  }, [setModal])

  const closeModal = useCallback(() => {
    setModal(null)
  }, [setModal])

  return (
    <ModalContext.Provider value={{ openModal, closeModal, openNetworkErrorModal }}>
      <ModalContainer props={modal} />
      {children}
    </ModalContext.Provider>
  )
}

export function useModal () {
  return React.useContext(ModalContext)
}

export default ModalProvider
