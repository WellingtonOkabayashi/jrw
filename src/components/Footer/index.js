import React from 'react'
import { SectionFooter } from './style'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Footer() {
  const iconSize = '40px'

  const Logo = process.env.REACT_APP_NAME_LOGO || 'not available'
  return (
    <SectionFooter>
      <div className="footer">
        <ul>
          <a href="https://www.facebook.com/profile.php?id=100086994404044">
            <FacebookIcon sx={{ fontSize: iconSize }} />
          </a>
          <a href="https://www.instagram.com/jwr_service/">
            <InstagramIcon sx={{ fontSize: iconSize }} />
          </a>

          <a href="https://www.linkedin.com/in/wellington-okabayashi-209636233/">
            <LinkedInIcon sx={{ fontSize: iconSize }} />
          </a>
        </ul>
      </div>
      <div className="author">
        ©2022 <span>{Logo}</span>. All rights reserved.
      </div>
    </SectionFooter>
  )
}
