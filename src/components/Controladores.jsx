import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; // Twitter como "X"
import DownloadIcon from '@mui/icons-material/Download';
import '../Controladores.css'


function Controladores() {
  return (
    <div className="controladores">
        <button id="new-quote">Nueva frase</button>
      
      <div className="mini-botones-contenedor">
        <a id="tweet-quote" href="https://twitter.com/intent/tweet?" target="_top" className="mini-botones mini-twitter">
          <FontAwesomeIcon icon={faXTwitter} className="twitter-icon"/>
        </a>
        <button className="mini-botones mini-descarga">
          <DownloadIcon className="download-icon" />
        </button>
      </div>
    </div>
  )
}

export default Controladores
