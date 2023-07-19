/* eslint-disable react/prop-types */
import './PortfolioDetail.css';
import Carousel from '../carousel/Carousel';
import ButtonClose from '../Button/ButtonClose';
import { useStateContext } from '../../context/ContextProvider';
import ReactPlayer from 'react-player';

const PortfolioDetail = ({ projectId, title, images, projectInfo, description }) => {
  const { closeModalDetail } =useStateContext();
  return (
    <section id='portfolio' className='portfolio'>
      <div id='portfolio-details' className='portfolio-details'>
        <div className='container'>
        <ButtonClose closeModal={closeModalDetail} />
          <div className='row'>
            <div className='col-lg-8'>
              <h2 className='portfolio-title'>{title}</h2>
              <div className='portfolio-details-slider '>
                <div className='swiper-wrapper align-items-center'>
                  {
                    projectId!==4?
                    <Carousel  imgData={images}/>:
                    <ReactPlayer 
                    url={projectInfo.videoUrl}
                    controls
                    loop
                    playing
                    />
                  }
                </div>
                <div className='swiper-pagination'></div>
              </div>
            </div>
            <div className='col-lg-4 portfolio-info'>
              <h3>Información del Proyecto</h3>
              <ul>
                <li><strong>Categoria</strong>: {projectInfo.category}</li>
                <li><strong>Proyecto URL</strong>: <a href={projectInfo.url} target='_blank' rel="noreferrer">{projectInfo.url}</a></li>
                <li><strong>Repositorio URL</strong>: <a href={projectInfo.repository} target='_blank' rel="noreferrer">{projectInfo.repository}</a></li>
                {projectId===4 && <li><strong>Video de Presentación</strong>: <a href={projectInfo.videoUrl} target='_blank' rel="noreferrer">{projectInfo.videoUrl}</a></li>}
              </ul>
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;