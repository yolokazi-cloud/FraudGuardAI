import Script from 'next/script';
import '../styles/globals.css';
import { Component } from 'react';

const App = ({ Component, PageProps }) => (
  <div>
    <Component {...PageProps} />
    <Script src="https://kit.fontawesome.com/852e6c0ef5.js" crossOrigin="anonymous" />
  </div>
)
