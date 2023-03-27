import React from 'react'
import Especializarimg from '../assets/especializar.png'

import { CertStyle } from './style'

export default function Especializar() {
  return (
    <CertStyle>
      <div className="box">
        <img className="img" alt="certificado" src={Especializarimg}></img>
      </div>
    </CertStyle>
  )
}
