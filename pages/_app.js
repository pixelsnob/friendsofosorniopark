
import React from 'react';
import App from 'next/app';

import '../public/css/base.css';

export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}
