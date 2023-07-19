/* eslint-disable react/prop-types */
import { useStateContext } from '../../context/ContextProvider';
import './Modal.css';

const Modal = ({ children }) => {
  const { isOpenDetail } = useStateContext();
  return (
    <article className={`modal ${isOpenDetail && 'is-open'}`}>
      <div className=" modal-container">
        {children}
      </div>
    </article>
  );
};

export default Modal;