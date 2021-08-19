import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      {/* <img
        src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/iQoo/iQOO_Z3/PrimeBadge/D26311855_WLD_iQOO_iQOO-Z3---GW-Design-SIM_TallHero_3000x1200._CB644106497_.jpg'
        alt=''
      /> */}
      <base />
      <div className='slider'>
        <figure>
          <img
            src='https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            alt=''
            width='20%'
            height='20%'
          />
          <img
            src='https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            alt=''
            width='20%'
            height='20%'
          />
          <img
            src='https://images.macrumors.com/t/Aw7nLDoUOZKWGy9ZgUPd3pOWNts=/1600x1200/smart/article-new/2018/07/apple-devices.jpg'
            alt=''
            width='20%'
            height='20%'
          />
          <img
            src='https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            alt=''
            width='20%'
            height='20%'
          />
          <img
            src='https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            alt=''
            width='20%'
            height='20%'
          />
        </figure>
      </div>
      <br />
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/Herotator/Cooking-Days_3000x1200-2._CB645273842_.jpg'
        alt=''
      />
      <div className='home__row'>
        <Product
          id='1212'
          title='Computer'
          price={11.96}
          rating={4}
          image='https://lh3.googleusercontent.com/proxy/1c9sz8ec0m4CsSj1LXjYRXt0_eq2K-syRLwQYRemQ58C5eoEixHPyRNTgu_g00vQWAnW3wfYFILsfJ-n8WVGk6PrWoWdBVnn8fKznP_mlj7_T03SSoIHUpygRuQiYZafXKZBf_Kmkw'
        />
        <Product
          id='1212'
          title='Computer'
          price={20.96}
          rating={3}
          image='https://images.unsplash.com/photo-1518118202680-891d607277d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        />
        <Product
          id='1212'
          title='Computer'
          price={30.96}
          rating={5}
          image='https://c1.wallpaperflare.com/preview/988/683/824/watch-phone-mobile-phone-macbook-thumbnail.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='1212'
          title='Computer'
          price={11.96}
          rating={4}
          image='https://lh3.googleusercontent.com/proxy/1c9sz8ec0m4CsSj1LXjYRXt0_eq2K-syRLwQYRemQ58C5eoEixHPyRNTgu_g00vQWAnW3wfYFILsfJ-n8WVGk6PrWoWdBVnn8fKznP_mlj7_T03SSoIHUpygRuQiYZafXKZBf_Kmkw'
        />
        <Product
          id='1212'
          title='Computer'
          price={20.96}
          rating={3}
          image='https://images.unsplash.com/photo-1518118202680-891d607277d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        />
        <Product
          id='1212'
          title='Computer'
          price={30.96}
          rating={5}
          image='https://c1.wallpaperflare.com/preview/988/683/824/watch-phone-mobile-phone-macbook-thumbnail.jpg'
        />
        <Product
          id='1212'
          title='Computer'
          price={40.96}
          rating={4}
          image='https://www.intego.com/mac-security-blog/wp-content/uploads/2019/01/MacBook-Pro-Retina-with-iPad-Pro-iPhone-Apple-Watch-by-SimonWaldherr-300x260.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='1212'
          title='Computer'
          price={30.96}
          rating={5}
          image='https://c1.wallpaperflare.com/preview/988/683/824/watch-phone-mobile-phone-macbook-thumbnail.jpg'
        />
        <Product
          id='1212'
          title='Computer'
          price={40.96}
          rating={4}
          image='https://www.intego.com/mac-security-blog/wp-content/uploads/2019/01/MacBook-Pro-Retina-with-iPad-Pro-iPhone-Apple-Watch-by-SimonWaldherr-300x260.jpg'
        />
      </div>
    </div>
  )
}

export default Home
