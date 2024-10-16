import React from 'react';
import { Header } from '../../Layouts/Header/header';
import './Home.css';
import travelingImage from '../../../assets/undraw_Traveling_yhxq.png';

export const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className='content-description'>
          <div className='intro-section'>
            <h3>Bienvenido a mi portafolio</h3>
            <img src={travelingImage} alt="Viajar" />
          </div>
          <div className='section1'>
            <p>
              Soy un desarrollador web apasionado por la creación de soluciones digitales innovadoras. 
              A lo largo de mi carrera, he trabajado en una amplia gama de proyectos que abarcan desde el desarrollo de 
              sitios web responsivos hasta aplicaciones web dinámicas utilizando tecnologías como <strong>React, JavaScript, y Node.js</strong>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
