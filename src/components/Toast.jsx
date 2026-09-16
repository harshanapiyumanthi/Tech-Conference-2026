import React from 'react';

export default function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast ${toast.type === 'success' ? 'toast-success' : 'toast-info'}`}
          onClick={() => onDismiss(toast.id)}
        >
          <span style={{ fontSize: '1.2rem' }}>
            {toast.type === 'success' ? '✅' : 'ℹ️'}
          </span>
          <div style={{ fontSize: '0.88rem', fontWeight: 500, lineHeight: 1.4 }}>
            {toast.message}
          </div>
        </div>
      ))}
    </div>
  );
}
