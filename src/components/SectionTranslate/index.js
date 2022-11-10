import React from 'react'
import { SectionTranslate } from './style'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ArticleIcon from '@mui/icons-material/Article'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import serviceimg from '../../components/assets/service.jpg'
import Footer from '../Footer'

function Translate() {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  const Logo = process.env.REACT_APP_NAME_LOGO || 'not available'
  return (
    <>
      <SectionTranslate>
        <section id="content">
          <p>
            <br></br>
            Bem vindo a
            <a href="/jrw/#/">
              {Logo}
              <span id="span">Translate</span>
            </a>
            , nossa página voltada a serviços de tradução , Certidão de
            Nascimento , Certidão de Casamento , etc ...
            <br></br>
            Tradução de Documentos para solicitação de vistos .<br></br>
            <br></br>
            Veja abaixo a lista de traduções disponíveis .
            <List
              sx={{
                width: '100%',
                maxWidth: 650,
                bgcolor: 'background.paper'
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon sx={{ color: 'var(--base-color)' }} />
                </ListItemIcon>
                <ListItemText
                  className="titulo"
                  primary="Documentos para Tradução"
                />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: 'black' }}
                      primary="Certidão de Nascimento"
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Certidão de Casamento" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: 'var(--base-color)' }} />
                    </ListItemIcon>
                    <ListItemText primary="Para outras traduções entre em contato" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </p>
          <button>
            {' '}
            <a href="/jrw/#/contato">Entrar em Contato</a>
          </button>

          <div className="imagem">
            <a href="/jrw/#/translate">
              <img src={serviceimg} alt="computador" />
            </a>
          </div>
        </section>
        <Footer />
      </SectionTranslate>
    </>
  )
}
export default Translate
