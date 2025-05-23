import React from 'react'
import cristianCara from '../assets/cris.png'
import Controladores from './Controladores';
import '../Frase.css'


function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const frases = [
  {
    frase: '"Jimi vs Kimi: Dawn of monkeys".',
    autor: "Cristian Tutub",
    imagen: cristianCara,
    dijo: 'siempre'
  },
  {
    frase: '"Jimi vs Kimi: Dawn of monkeys".',
    autor: "Cristian Tutub",
    imagen: cristianCara,
    dijo: 'nunca'
  }
];

let fraseInicial = frases[aleatorio(0, frases.length - 1)];

function Frase() {
  return (
    <article id="quote-box">
      <section className="up">
        <div className='imagen-contenedor'>
          <img src={fraseInicial.imagen}/>
        </div>
        <div className="textos">
          <p id="text">{fraseInicial.frase}</p>
          <p id="author">-Frases que {fraseInicial.autor} {fraseInicial.dijo} dijo</p>
        </div>
      </section>
      <Controladores />
    </article>
  )
}

export default Frase
