import React from 'react';

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full sm:max-w-lg sm:rounded-2xl bg-white shadow-xl border border-black/10 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          {title ? (
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          ) : (
            <span className="sr-only">Modal</span>
          )}
          <button
            onClick={onClose}
            className="rounded-md p-2 hover:bg-zinc-100 text-zinc-600"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
