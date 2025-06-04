'use client'

import { createContext, useState, useContext } from 'react'

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null)

  const showNotification = (type, message, duration = 5000) => {
    setNotification({ type, message })
    
    if (duration) {
      setTimeout(() => {
        setNotification(null)
      }, duration)
    }
  }

  const hideNotification = () => {
    setNotification(null)
  }

  return (
    <NotificationContext.Provider value={{ showNotification, hideNotification }}>
      {children}
      {notification && (
        <div className="notification-wrapper">
          <Notification 
            type={notification.type} 
            message={notification.message} 
            onClose={hideNotification}
          />
        </div>
      )}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  return useContext(NotificationContext)
}