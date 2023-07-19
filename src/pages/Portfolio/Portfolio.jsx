/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { projectsData } from '../../assets/data/Data';
import { Modal, PortfolioCard, PortfolioDetail } from '../../components';
import { useStateContext } from '../../context/ContextProvider';
import './Portfolio.css';

const Portfolio = () => {
  // eslint-disable-next-line no-unused-vars
  const [project, setProject] = useState({});
  const { isOpenDetail, projectId, closeModalDetail } = useStateContext();

  // useEffect(() => {
  //   const projectSelect = projectsDetail.find((e) => e.projectId === projectId);
  //   setProject(projectSelect);
  // }, []);

  // useEffect(() => {
  //   setProject(projectsDetail.find((e) => e.projectId === projectId));
  // }, [projectId]);

  return (
    <section
      id='portfolio'
      className='portfolio'
    >
      <div className='container'>
        <div className='section-title'>
          <h2>Portafolio</h2>
          <p>Mis Trabajos</p>
        </div>
        <div className='row portfolio-container'>
          {true &&
            projectsData.map((p) => (
              <PortfolioCard
                key={p.id}
                {...p}
              />
            ))}
          {isOpenDetail && (
            <Modal key={project.projectId}>
              <PortfolioDetail
                key={project.projectId}
                handleButton={closeModalDetail}
                {...project}
              />
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
