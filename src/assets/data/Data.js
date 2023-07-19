import jhonntanPhoto from '../img/jhonntanPhoto.jpg';
import dashboard from '../img/dashboard/dashboard.png';
import exchange from '../img/exchange/exchange.jpg';
export const personalData = {
  name: 'Jhonatan Tabraj',
  email: 'jhonntantb@gmail.com',
  phone: '+54 1124072105',
  city: 'CABA, Argentina',
  age: '32',
  photo: jhonntanPhoto,
};

export const projectsData = [
  {
    id: 1,
    img: dashboard,
    title: 'Dashboard App',
    text: 'App que simula un dashboard de administrador',
    url: 'https://admin-dashboard-brown-gamma.vercel.app/',
  },
  {
    id: 2,
    img: exchange,
    title: 'Exhange App',
    text: 'App que muestra información de monedas',
    url: 'https://vue-js-exchange.vercel.app/',
  },
];
