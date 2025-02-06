import React from "react";

const Modal = ({ isOpen, onClose, children,setIsModalOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center " >
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-0" onClick={()=> onClose(false)}></div>
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Close Button */}
        <button
          onClick={()=>onClose(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold"
        >
          &times;
        </button>
        {/* Modal Content */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
