/* eslint-disable react/prop-types */
import './ButtonClose.css';
const ButtonClose = ({ closeModal }) => {
  return (
    <div className='button-container'>
      <button onClick={closeModal} className="button-close">X</button> 
    </div> 
  );
};

export default ButtonClose;