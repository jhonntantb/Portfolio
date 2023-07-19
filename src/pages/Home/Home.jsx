import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';

const Home = () => {
  const [icon, setIcon] = useState('list');
  const [styleMovil, setStyleMovil] = useState('');
  const { navPosition, setNavClass, initPage, setNavPosition, setInitPage } =
    useStateContext();

  const location = useLocation();

  const handleIconNav = () => {
    if (icon === 'list') {
      setIcon('x');
      setStyleMovil('navbar-mobile');
    } else {
      setIcon('list');
      setStyleMovil('');
    }
  };

  const handleStyleNavbar = (value) => {
    console.log('hola perros');
    setNavClass(value);
    setStyleMovil('');
    setIcon('list');
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setNavPosition('');
      setInitPage('active');
    } else {
      setNavPosition('header-top');
      setInitPage('');
    }
  }, []);
  console.log('la poscion del nav', navPosition);
  return (
    <>
      <header
        id='header'
        className={`${navPosition}`}
      >
        <div className='container'>
          <h1>
            <Link
              to={'/'}
              onClick={() => setNavClass('')}
            >
              Jhonatan Tabraj
            </Link>
          </h1>
          <h2>
            Soy un apasionado <span>desarrollador web</span> de Perú
          </h2>
          <nav
            id='navbar'
            className={`navbar ${styleMovil}`}
          >
            <ul>
              <li onClick={() => handleStyleNavbar('')}>
                <Link
                  to={'/'}
                  className={`nav-link ${initPage}`}
                >
                  Inicio
                </Link>
              </li>
              <li onClick={() => handleStyleNavbar('header-top')}>
                <Link
                  to={'about'}
                  className='nav-link'
                >
                  Sobre Mí
                </Link>
              </li>
              <li onClick={() => handleStyleNavbar('header-top')}>
                <Link
                  to={'resume'}
                  className='nav-link'
                >
                  Curriculum
                </Link>
              </li>
              <li onClick={() => handleStyleNavbar('header-top')}>
                <Link
                  to={'portfolio'}
                  className='nav-link'
                >
                  Portafolio
                </Link>
              </li>
              <li onClick={() => handleStyleNavbar('header-top')}>
                <Link
                  to={'contact'}
                  className='nav-link'
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <i
              onClick={handleIconNav}
              className={`bi bi-${icon} mobile-nav-toggle`}
            ></i>
          </nav>

          <div className='social-links'>
            <a
              href='https://github.com/jhonntantb'
              target='_blank'
              className='github'
              rel='noreferrer'
            >
              <i className='bi bi-github'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/jhonatan-tabraj/'
              target='_blank'
              className='linkedin'
              rel='noreferrer'
            >
              <i className='bi bi-linkedin'></i>
            </a>
          </div>
        </div>
      </header>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
