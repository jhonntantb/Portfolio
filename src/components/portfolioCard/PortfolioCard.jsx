/* eslint-disable react/prop-types */
import {  useStateContext } from '../../context/ContextProvider';

const PortfolioCard = ({ title, text, img, id, url }) => {
   const { handleDetailModal } = useStateContext();

  return (
    <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
      <div className='portfolio-wrap'>
        <img src={img} className='img-fluid' alt='' />
        <div className='portfolio-info'>
          <h4>{ title }</h4>
          <p>{ text }</p>
          <div className='portfolio-links'>
            <a href={url} target='_blank' className='portfolio-lightbox' title='App 1' rel="noreferrer"><i className='bi bi-link-45deg'></i></a>
            <a  id={id}><i id={id} onClick={e => handleDetailModal(e.target.id)} className='bi bi-plus-lg'></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;