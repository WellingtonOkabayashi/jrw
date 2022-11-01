import React from 'react'
import { SectionService } from './style'
import labimg from '../assets/lab.jpg'
import devimg from '../assets/work.jpg'
import serviceimg from '../assets/service.jpg'
import Footer from '../Footer'

function Service() {
  const Logo = process.env.REACT_APP_NAME_LOGO || 'not available'
  return (
    <SectionService>
      <section id="content">
        <br></br>
        <br></br>
        <div className="jwrlab">
          <p>
            <div className="title">
              <p>
                Bem vindo a{' '}
                <a href="/">
                  {Logo}
                  <span>Services</span>
                </a>
              </p>
            </div>
            Aqui você encontra a
            <a href="/lab">
              {Logo}
              <span>Lab</span>
            </a>
            , nossa página voltada a tecnologia , montagen , manutenção e venda
            de peças para computadores . .
          </p>

          <div className="imagem">
            <a href="/lab">
              <img src={labimg} alt="componentes de computador" />
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <br></br>
        <br></br>
        <div className="jwrdev">
          <p>
            E também encontra a
            <a href="/dev">
              {Logo}
              <span>Dev</span>
            </a>
            , nossa página voltada a programação , desenvolvimento de Websites
            ..
          </p>
          <div className="imagem">
            <a href="/dev">
              <img src={devimg} alt="computador" />
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <br></br>
        <br></br>
        <div className="jwrtranslate">
          <p>
            Também encontra a
            <a href="/translate">
              {Logo}
              <span>Translate</span>
            </a>
            nossa página voltada a serviços de tradução , Certidão de Nascimento
            , Certidão de Casamento , etc ...
          </p>
          <div className="imagem">
            <a href="/translate">
              <img src={serviceimg} alt="computador" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </SectionService>
  )
}
export default Service
