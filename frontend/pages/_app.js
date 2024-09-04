import Script from 'next/script';
import '../styles/globals.css';
import { Component } from 'react';
import { SideBar } from '@/components';
import { BasicHeader } from '@/components';
import { LandingContent } from '@/components';
import { Footer } from '@/components';

const App = ({ Component, pageProps }) => (
  <div className="flex ">
    <SideBar/>
    <BasicHeader/>
    <LandingContent/>
    <Footer/>
    <div className="pt-65">
      <Component {...pageProps} />
    </div>
    <Script src="https://kit.fontawesome.com/852e6c0ef5.js" crossOrigin="anonymous" />
  </div>
);

export default App;
