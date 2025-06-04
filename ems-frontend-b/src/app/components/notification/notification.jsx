'use client'

export default function Notification({ type, message, onClose }) {
  const alertClass = {
    success: 'alert-success',
    error: 'alert-danger',
    warning: 'alert-warning',
    info: 'alert-info'
  }[type] || 'alert-info'

  return (
    <div className={`alert ${alertClass} alert-dismissible fade show`} role="alert">
      {message}
      <button 
        type="button" 
        className="btn-close" 
        onClick={onClose}
        aria-label="Close"
      ></button>
    </div>
  )
}