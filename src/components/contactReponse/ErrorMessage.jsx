import './ErrorMessage.css';
import { useStateContext } from '../../context/ContextProvider';

const ErrorMessage = () => {
  const { closeModalform } = useStateContext();
  return (
    <div className='error-message'>
      <p>Ocurrió un problema, vuelva intentarlo</p>
      <button onClick={() => closeModalform()}>Close</button>
    </div>
  );
};

export default ErrorMessage;