import React from 'react'
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

function Footer() {
  return (
    <div className='footerarea'>
      <div className='footerarea__top'>
        <p>Back to Top</p>
      </div>
      <div className='footerarea__links'>
        <div className='footerarea__linkarea'>
          <span style={{ fontSize: '20px' }}>Get to Know Us</span>
          <span>About Us</span>
          <span>Careers</span>
          <span>Press Release</span>
          <span>Infoware Cares</span>
        </div>
        <div className='footerarea__linkarea'>
          <span style={{ fontSize: '20px' }}>Connect with Us</span>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
          <span>Github</span>
        </div>
        <div className='footerarea__linkarea'>
          <span style={{ fontSize: '20px' }}>Make Money with Us</span>
          <span>Sell on Infoware</span>
          <span>Sell under Infoware Accelerator</span>
          <span>Infoware Global Selling</span>
          <span>Become an Affiliate</span>
        </div>
        <div className='footerarea__linkarea'>
          <span style={{ fontSize: '20px' }}>Let Us Help You</span>
          <span>COVID-19 and Infoware</span>
          <span>Your Account</span>
          <span>Returns Centre</span>
          <span>100% Purchase Protection</span>
        </div>
      </div>
      <div className='footer__socialmedia'>
        <FacebookIcon />
        <InstagramIcon />
        <GitHubIcon />
        <TwitterIcon />
      </div>
    </div>
  )
}

export default Footer
