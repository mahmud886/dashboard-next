import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import usePortal from "../../hooks/usePortal.js";

// eslint-disable-next-line react/prop-types
const Modal = ({ children, isOpen, portalId, size, onClose, width, height }) => {
  const target = usePortal(portalId);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const sizeClasses = {
    small: 'w-1/4',
    medium: 'w-1/2',
    large: 'w-3/4',
    full: 'w-full'
  };

  const dynamicWidth = width ? `w-${width}` : sizeClasses[size] || sizeClasses.small;
  const dynamicHeight = height ? `h-${height}` : '';

  return isOpen ? createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className={`relative bg-white p-4 rounded ${dynamicWidth} ${dynamicHeight}`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 transition-all duration-300 text-gray-500 bg-tsGrey hover:bg-tsRed rounded-full hover:text-white z-[60]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-1" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    target
  ) : null;
};

export default Modal;
