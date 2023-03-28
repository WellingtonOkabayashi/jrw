import { StyleContato } from '../Contato/style'
import Footer from '../Footer'
import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import Button from '@mui/material/Button'

export default function Contato() {
  const URL = 'https://jrwlab.netlify.app/'
  //

  const [assunto, setAssunto] = React.useState('')

  const handleChange = event => {
    setAssunto(event.target.value)
    //
  }

  return (
    <>
      <StyleContato>
        <div>
          <section id="contato">
            <div className="contato margin">
              <div className="container">
                <h2 className="text">Entar em contato</h2>
                <p>
                  Caso queira solicitar alguma consulta ou tenha alguma duvida
                  ,fique a vontade para entrar em contato responderei assim que
                  possível.
                </p>
                <div className="contact-email">
                  <form
                    action="https://formsubmit.co/okabayashiwellington@gmail.com"
                    method="POST"
                  >
                    <input type="hidden" name="_next" value={URL} />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Digite seu Nome"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Digite seu Email"
                      required
                    />

                    <Box
                      id="box"
                      sx={{
                        minWidth: 120
                      }}
                    >
                      <FormControl fullWidth>
                        <InputLabel id="input">Assunto</InputLabel>
                        <Select
                          labelId="select-label"
                          id="select"
                          value={assunto}
                          name="subject"
                          label="Assunto"
                          onChange={handleChange}
                        >
                          <MenuItem value="Desenvolvimento web">
                            Desenvolvimento web
                          </MenuItem>
                          <MenuItem value="Montagem e manutenção">
                            Montagem e manutenção
                          </MenuItem>
                          <MenuItem value="Tradução">Tradução</MenuItem>
                          <MenuItem value="Outros">Outros</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <textarea
                      name="message"
                      placeholder="Digite sua Mensagem"
                      required
                    ></textarea>

                    <Button type="submit">Enviar</Button>
                  </form>
                </div>
              </div>
            </div>

            <div className=" contents"></div>
          </section>
        </div>
      </StyleContato>
      <Footer />
    </>
  )
}
