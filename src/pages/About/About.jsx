import './About.css';
//import jhonntanPhoto from '../../assets/img/jhonntanPhoto.jpg';
import { personalData } from '../../assets/data/Data.js';

const About = () => {
  return (
    <section
      id='about'
      className='about'
    >
      <div className='about-me container'>
        <div className='section-title'>
          <h2>Sobre Mí</h2>
          <p>Aprende mas de mí</p>
        </div>
        <div className='row'>
          <div className='col-lg-4 jhonntan'>
            <img
              src={personalData.photo}
              className='img-fluid'
              alt=''
            />
          </div>
          <div className='col-lg-8 pt-4 pt-lg-0 content'>
            <h3>Full Stack Developer</h3>
            <p className='fst-italic'>
              Mi nombre es Jhonatan, Soy Full Satck Developer, me forme como
              programador en Henry , donde quede fascinado con la programación,
              por que me permite crear nuevas cosas y ver desde una perspectiva
              diferente como nos relacionamos con la tecnología.
            </p>
            <div className='row'>
              <div className='col-lg-6'>
                <ul>
                  <li>
                    <i className='bi bi-chevron-right'></i>{' '}
                    <strong>Website:</strong>https://jhonntantb.github.io/me/
                    <span></span>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i>{' '}
                    <strong>Phone:</strong> <span>{personalData.phone}</span>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i>{' '}
                    <strong>City:</strong> <span>{personalData.city}</span>
                  </li>
                </ul>
              </div>
              <div className='col-lg-6'>
                <ul>
                  <li>
                    <i className='bi bi-chevron-right'></i>{' '}
                    <strong>Age:</strong> <span>{personalData.age}</span>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i>{' '}
                    <strong>Email:</strong> <span>{personalData.email}</span>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i>{' '}
                    <strong>Freelance:</strong> <span>Disponible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='skills container'>
          <div className='section-title'>
            <h2>Technologies</h2>
          </div>
          <div className='row skills-content'>
            <div className='col-lg-6'>
              <div className='progress'>
                <span className='skill'>
                  HTML <i className='val'>90%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  CSS <i className='val'>90%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  JavaScript <i className='val'>90%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  TypeScript <i className='val'>80%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='80'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  Node.js <i className='val'>90%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  NestJs <i className='val'>90%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  SQL Server <i className='val'>80%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='80'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  PostgreSQL <i className='val'>80%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='80'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='progress'>
                <span className='skill'>
                  Express <i className='val'>90%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  React <i className='val'>90%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  {' '}
                  Redux <i className='val'>90%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  Next.js <i className='val'>80%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='80'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  Vue.JS <i className='val'>70%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='70'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  {' '}
                  React Native (expo) <i className='val'>80%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='70'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>
              <div className='progress'>
                <span className='skill'>
                  Sequelize <i className='val'>90%</i>
                </span>
                <div className='progress-bar-wrap'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='90'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='interests container'>
          <div className='section-title'>
            <h2>Intereses</h2>
          </div>

          <div className='row'>
            <div className='col-lg-3 col-md-4'>
              <div className='icon-box'>
                <i
                  className='bi bi-film'
                  style={{ color: '#ffbb2c' }}
                ></i>
                <h3>Peliculas</h3>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
              <div className='icon-box'>
                <i
                  className='bi bi-music-note-list'
                  style={{ color: '#5578ff' }}
                ></i>
                <h3>Musica</h3>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 mt-4 mt-md-0'>
              <div className='icon-box'>
                <i
                  className='bi bi-book-half'
                  style={{ color: '#e80368' }}
                ></i>
                <h3>Leer</h3>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 mt-4 mt-lg-0'>
              <div className='icon-box'>
                <i
                  className='bi bi-plug-fill'
                  style={{ color: '#e361ff' }}
                ></i>
                <h3>Energias Limpias</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
