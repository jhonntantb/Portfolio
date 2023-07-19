import './SendMessage.css';
import { useStateContext } from '../../context/ContextProvider';

const SendMessage = () => {
  const { closeModalform } = useStateContext();
  return (
    <div className='sent-message'>
      <p>Su mensaje fue enviado. Gracias!</p>
      <button onClick={() =>closeModalform()}>Aceptar</button>
    </div>
  );
};

export default SendMessage;