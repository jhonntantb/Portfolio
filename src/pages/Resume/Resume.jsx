import './Resume.css';

const Resume = () => {
  return (
    <section id='resume' className='resume'>
    <div className='container'>

      <div className='section-title'>
        <h2>Curriculum</h2>
        <p>Este es mi CV</p>
      </div>

      <div className='row'>
        <div className='col-lg-6'>
          <h3 className='resume-title'>Resumen</h3>
          <div className='resume-item pb-0'>
            <h4>Jhonatan Tabraj</h4>
            <p><em>Full Stack Developer, fascinado por la programación, por que me permite crear nuevas cosas y ver desde una perspectiva diferente como nos relacionamos con la tecnología  </em></p>
            <div>
            <ul>
              <li>Jauja, Júnin, Perú</li>
              <li> <a href='https://wa.link/kztmsq' target='_blank' rel="noreferrer">+51 910626910</a></li>
              <li>jhonntantb@gmail.com</li>
            </ul>
            </div>
          </div>

          <h3 className='resume-title'>Educación</h3>
          <div className='resume-item'>
            <h4>Full Stack Developer</h4>
            <h5>Mayo-2021 / Setiembre-2021</h5>
            <p><em> <a href='https://www.soyhenry.com/' target='_blank' rel="noreferrer"> Henry Bootcamp </a></em></p>
            <p>Formación en tecnologías front-end y back-end</p>
            <p>Curso Teorico-Practico</p>
          </div>
          <div className='resume-item'>
            <h4>Ingenieria del Gas Natural y Energía</h4>
            <h5>2010 - 2014</h5>
            <p><em>Universidad Nacional del Centro del Perú</em></p>
            <p></p>
          </div>
        </div>
        <div className='col-lg-6'>
          <h3 className='resume-title'>Experiencia Profesional</h3>
          <div className='resume-item'>
            <h4>Bank End Developer</h4>
            <h5>Enero-2022 / Marzo-2022</h5>
            <p><em><a  href='https://www.smartpyme.pe/' target='_blank' rel="noreferrer">SmartPyme</a></em></p>
            <div>
            <ul>
              <li>Desarrolle APIs utilizando microservicios que eran consumidas por el equipo de Frond-End, y manejo de datos en SQL Server .</li>
              <li>NestJs | Typecript | NodeJS | Sequelize | SQL Server </li>
            </ul>
            </div>
          </div>
          <div className='resume-item'>
            <h4>Full Stack Developer</h4>
            <h5>Julio-2021 / Agosto-2021</h5>
            <p><em>Countries  App</em></p>
            <div>
            <ul>
              <li>Diseñe y Desarrolle una aplicación Web que me permite Países y dejar un registro de las actividades que se puedan realizar en ellos .</li>
              <li>React&Redux | CSS | Javascript | NodeJS | Express | Sequelize | PosgreSql </li>
            </ul>
            </div>
          </div>
          <div className='resume-item'>
            <h4>Full Stack Developer</h4>
            <h5>Agosto-2021/ Setiembre-2021</h5>
            <p><em>Merceria Araceli</em></p>
            <div>
            <ul>
              <li>Diseño y Desarrolo de un E-Commerce para una Merceria</li>
              <li>Participé de manera colaborativa en un equipo con reuniones diarias y sprints semanales con un product owner, utilizando Scrum.</li>
              <li>React&Redux | Bootstrap | CSS | Firebase | Javascript | NodeJS | Express | Sequelize | PosgreSql</li>
            </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  );
};

export default Resume;