import React, { useState } from 'react'
import cristianCara from '../assets/cris.png'
import nancyCara from '../assets/nancy.png'
import isakCara from '../assets/isak.png'
import Controladores from './Controladores';
import '../Frase.css'
import html2canvas from 'html2canvas';


function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const frases = [
  {
    frase: '"Jimi vs Kimi: Dawn of monkeys".',
    autor: "Cristian Tutub",
    imagen: cristianCara,
    complemento: 'siempre'
  },
  {
    frase: '"Mmmmmmm".',
    autor: "Nancy Amascar",
    imagen: nancyCara,
    complemento: 'nunca'
  }, 
  {
    frase: '"¿Qué hay de mí? ¿Qué hay de lo que quiero? ¿Qué hay de lo que siento?".',
    autor: "Pineapple Isak",
    imagen: isakCara,
    complemento: 'nunca'
  }
];

let index = aleatorio(0, frases.length - 1);
let fraseActual = frases[index];

function Frase() {
  const [imagen, setImagen] = useState(fraseActual.imagen);
  const [frase, setFrase] = useState(fraseActual.frase);
  const [autor, setAutor] = useState(fraseActual.autor);
  const [complemento, setComplemento] = useState(fraseActual.complemento);

  function actualizarFrase() {
    let nuevaLista = [...frases];
    nuevaLista.splice(index, 1);
    let randomIndex = aleatorio(0, nuevaLista.length - 1);
    let nuevaFrase = nuevaLista[randomIndex];


    setImagen(nuevaFrase.imagen);
    setFrase(nuevaFrase.frase);
    setAutor(nuevaFrase.autor);
    setComplemento(nuevaFrase.complemento);

    frases.forEach((e, i)=> {
      if (nuevaFrase.frase == e.frase) {
        fraseActual = frases[i];
        index = i;
      }
    })
  }

  function descargarImagen() {
    html2canvas(document.querySelector(".up"), {
      backgroundColor: '#000',
      color: '#fff'
    }).then(canvas => {
    const enlace = document.createElement('a');
    enlace.download = 'frase.jpg';
    enlace.href = canvas.toDataURL('image/jpeg'); // convierte el canvas en una imagen base64
    enlace.click();
});

  }

  return (
    <article id="quote-box">
      <section className="up">
        <div className='imagen-contenedor'>
          <img src={imagen} className="caritas"/>
        </div>
        <div className="textos">
          <p id="text">{frase}</p>
          <p id="author">-Frases que {autor} {complemento} dijo</p>
        </div>
      </section>
      <Controladores actualizar={actualizarFrase} descargar={descargarImagen}/>
    </article>
  )
}

export default Frase