import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; // Twitter como "X"
import DownloadIcon from '@mui/icons-material/Download';
import '../Controladores.css'

function Controladores(props) {
  function handleClick() {
    props.actualizar();
    //console.log(props.actualizar)
  }

  function descargar() {
    props.descargar();
  }

  return (
    <div className="controladores">
        <button id="new-quote" onClick={handleClick}>Nueva frase</button>
      
      <div className="mini-botones-contenedor">
        <a id="tweet-quote" href="https://twitter.com/intent/tweet?" target="_top" className="mini-botones mini-twitter">
          <FontAwesomeIcon icon={faXTwitter} className="twitter-icon"/>
        </a>
        <button className="mini-botones mini-descarga" onClick={descargar}>
          <DownloadIcon className="download-icon" />
        </button>
      </div>
    </div>
  )
}

export default Controladores
