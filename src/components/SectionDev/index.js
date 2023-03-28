import React from 'react'
import { SectionDev } from './style'
import devimg from '../assets/work.jpg'
import Footer from '../Footer'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import certificateone from '../assets/conectar.png'
import certificatetwo from '../assets/fundamentar.png'
import certificatetre from '../assets/especializar.png'
import Box from '@mui/material/Box'
import Conectar from '../Certificados/cert1.js'
import Fundamentar from '../Certificados/fundamentar.js'
import Especializar from '../Certificados/especializar.js'

import Modal from '@mui/material/Modal'

function Dev() {
  const Logo = process.env.REACT_APP_NAME_LOGO || 'not available'
  const style = {
    width: 500,
    margin: '0 auto'
  }
  const [open, setOpen] = React.useState(false)
  const [openSecond, setOpenSecond] = React.useState(false)
  const [openTernary, setOpenTernary] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleOpenSecond = () => setOpenSecond(true)
  const handleOpenTernary = () => setOpenTernary(true)
  const handleClose = () => setOpen(false)
  const handleCloseSecond = () => setOpenSecond(false)
  const handleCloseTernary = () => setOpenTernary(false)

  return (
    <>
      <SectionDev>
        <section id="content">
          <p>
            <br></br>
            Bem vindo a
            <a href="/#/dev">
              {Logo}
              <span id="span">Dev</span>
            </a>
            , página voltada a programação , desenvolvimento de Websites ..
            <br></br>
            <br></br>
          </p>
          <div className="imagem">
            <a href="/#/dev">
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
            <h5>Certificados</h5>
            <div className="certificates">
              <div className="box">
                <img
                  onClick={handleOpen}
                  src={certificateone}
                  alt="certificado conectar"
                />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Conectar />
                  </Box>
                </Modal>
              </div>
              <div className="box">
                <img
                  onClick={handleOpenSecond}
                  src={certificatetwo}
                  alt="certificado fundamentar"
                />
                <Modal
                  open={openSecond}
                  onClose={handleCloseSecond}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Fundamentar />
                  </Box>
                </Modal>
              </div>
              <div className="box">
                <img
                  onClick={handleOpenTernary}
                  src={certificatetre}
                  alt="certtificado especializar"
                />
                <Modal
                  open={openTernary}
                  onClose={handleCloseTernary}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Especializar />
                  </Box>
                </Modal>
              </div>
            </div>
          </div>

          <button className="btn">
            {' '}
            <a href="/#/contato">Entrar em Contato</a>
          </button>
        </section>

        <Footer />
      </SectionDev>
    </>
  )
}
export default Dev
