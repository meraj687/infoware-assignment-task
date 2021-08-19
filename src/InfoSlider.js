import React from 'react'

function InfoSlider() {
  return (
    <div style={{ background: 'black' }}>
      <marquee>
        <p style={{ color: 'whitesmoke', textTransform: 'uppercase' }}>
          Anyone with this app can login and register and this app is connected
          with firebase .
        </p>
      </marquee>
    </div>
  )
}

export default InfoSlider
