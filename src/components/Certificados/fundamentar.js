import React from 'react'
import Fundamentarimg from '../assets/fundamentar.png'

import { CertStyle } from './style'

export default function Fundamentar() {
  return (
    <CertStyle>
      <div className="box">
        <img className="img" alt="certificado" src={Fundamentarimg}></img>
      </div>
    </CertStyle>
  )
}
