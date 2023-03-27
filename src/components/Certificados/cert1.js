import React from 'react'
import Conectarimg from '../assets/conectar.png'

import { CertStyle } from './style'

export default function Conectar() {
  return (
    <CertStyle>
      <div className="box">
        <img className="img" alt="certificado" src={Conectarimg}></img>
      </div>
    </CertStyle>
  )
}
