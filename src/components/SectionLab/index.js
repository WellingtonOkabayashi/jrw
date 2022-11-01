import React from 'react'
import { SectionLab } from './style'
import labimg from '../assets/lab.jpg'
import Footer from '../Footer'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ArticleIcon from '@mui/icons-material/Article'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

function Lab() {
  const [openSecond, setOpenSecond] = React.useState(false)
  const [openPrimary, setOpenPrimary] = React.useState(false)
  const [openTernary, setOpenTernary] = React.useState(false)
  const [openFor, setOpenFor] = React.useState(false)

  const handleClickPrimary = () => {
    setOpenPrimary(!openPrimary)
  }
  const handleClickSecond = () => {
    setOpenSecond(!openSecond)
  }
  const handleClickTernary = () => {
    setOpenTernary(!openTernary)
  }
  const handleClickFor = () => {
    setOpenFor(!openFor)
  }

  const Logo = process.env.REACT_APP_NAME_LOGO || 'not available'

  return (
    <>
      <SectionLab>
        <section id="content">
          <div className="container">
            <p>
              <br></br>
              Bem vindo a
              <h5>
                <a href="/lab">
                  {Logo}
                  <span id="span">Lab</span>
                </a>
              </h5>
              , nossa página voltada a tecnologia , montagen , manutenção e
              venda de peças para computadores . .<br></br>
              <br></br>
            </p>
            <List
              sx={{
                width: '100%',
                maxWidth: 650,
                bgcolor: 'background.paper'
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickPrimary}>
                <ListItemIcon>
                  <InboxIcon sx={{ color: 'var(--base-color)' }} />
                </ListItemIcon>
                <ListItemText
                  className="titulo"
                  primary="Montagem de Computadores"
                />
                {openPrimary ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openPrimary} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: 'black' }}
                      primary="Upgrade para SSD"
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Troca de Placa de Vídeo" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Upgrade de Memória" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText primary="etc ..." />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>

            <List
              sx={{
                width: '100%',
                maxWidth: 650,
                bgcolor: 'background.paper'
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickSecond}>
                <ListItemIcon>
                  <InboxIcon sx={{ color: 'var(--base-color)' }} />
                </ListItemIcon>
                <ListItemText
                  className="titulo"
                  primary="Instalação de Programas"
                />
                {openSecond ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSecond} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: 'black' }}
                      primary="Windows 10"
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText primary="etc ..." />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
            <List
              sx={{
                width: '100%',
                maxWidth: 650,
                bgcolor: 'background.paper'
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickTernary}>
                <ListItemIcon>
                  <InboxIcon sx={{ color: 'var(--base-color)' }} />
                </ListItemIcon>
                <ListItemText className="titulo" primary="Manutenção" />
                {openTernary ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openTernary} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: 'black' }}
                      primary="Formatação de Computadores"
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Limpeza de Computador" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText primary="etc ..." />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>

            <List
              sx={{
                width: '100%',
                maxWidth: 650,
                bgcolor: 'background.paper'
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickFor}>
                <ListItemIcon>
                  <InboxIcon sx={{ color: 'var(--base-color)' }} />
                </ListItemIcon>
                <ListItemText className="titulo" primary="Loja" />
                {openFor ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openFor} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: 'black' }}
                      primary="Em Construção aguarde .."
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
            <button className="button">
              {' '}
              <a href="/contato">Entrar em Contato</a>
            </button>
          </div>
          <div className="imagem">
            <a href="/lab">
              <img src={labimg} alt="computador" />
            </a>
          </div>
        </section>

        <Footer />
      </SectionLab>
    </>
  )
}
export default Lab
