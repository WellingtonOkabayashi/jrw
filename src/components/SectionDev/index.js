import React from 'react'
import { SectionDev } from './style'
import devimg from '../assets/work.jpg'
import Footer from '../Footer'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'

function Dev() {
  const Logo = process.env.REACT_APP_NAME_LOGO || 'not available'
  return (
    <>
      <SectionDev>
        <section id="content">
          <p>
            <br></br>
            Bem vindo a
            <a href="/jrw/#/dev">
              {Logo}
              <span id="span">Dev</span>
            </a>
            , página voltada a programação , desenvolvimento de Websites ..
            <br></br>
            <br></br>
          </p>
          <div className="imagem">
            <a href="/jrw/#/dev">
              <img src={devimg} alt="computador" />
            </a>
          </div>
        </section>
        <section id="sobre">
          <h5>Sobre mim :</h5>
          <div id="sobremin">
            <p>
              Tenho 37 anos , trabalho e moro no Japão a mais de 20 anos .
              <br></br>
              Estudando programação na RocketSeat , e criando meus própios
              projetos desde que começei meus estudos .<br></br>
              Sempre disposto a encarar novos desafios , vamos transformar seu
              Sonho e o meu Desafio em Realidade ?<br></br>
              Então me mostre o seu Sonho e juntos faremos ele se tornar
              Realidade .<br></br>
            </p>
            <h5>Habilidades</h5>
            <div id="cards">
              <div className="box">
                <p>HTML5</p>
                <FaHtml5 />
              </div>
              <div className="box">
                <p>CSS</p>
                <FaCss3 />
              </div>
              <div className="box">
                <p>JAVASCRIPT</p>
                <FaJsSquare />
              </div>
              <div className="box">
                <p>REACT</p>
                <FaReact />
              </div>
            </div>
          </div>

          <button>
            {' '}
            <a href="/jrw/#/contato">Entrar em Contato</a>
          </button>
        </section>

        <Footer />
      </SectionDev>
    </>
  )
}
export default Dev
