const Modal = ({ isOpen, handleClose }) => {
  return (
    <>
      {isOpen && (
        <div>
          <h1>My Modal</h1>
          <button onClick={handleClose}>close modal</button>
        </div>
      )}
    </>
  );
};

export default Modal;
