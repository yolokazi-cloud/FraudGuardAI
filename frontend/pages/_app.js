import Script from 'next/script';
import '../styles/globals.css';
import { Component } from 'react';

const App = ({ Component, pageProps }) => (
  <div>
    <Component {...pageProps} />
    <Script src="https://kit.fontawesome.com/852e6c0ef5.js" crossOrigin="anonymous" />
  </div>
)

export default App;
