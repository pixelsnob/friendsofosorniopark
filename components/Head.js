
import Head from 'next/head';
import { Fragment } from 'react';

export default () => (
  <Fragment>
    <Head>
      <title>Friends of Osornio Park | Osornio Park Belongs to the Community!</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Baloo+Bhaijaan|Montserrat:400,700&display=swap" rel="stylesheet"></link>
    </Head>
    <style jsx global>{`
      h1 { 
        text-align: center;
        margin-top: 0;
        line-height: 1.3;
      }
      body {
        font-family: 'Montserrat';
        font-size: 1.1rem;
        line-height: 1.7;
        padding: 10px;
      }
      a {
        color: green;
        font-weight: bold;
      }
    `}</style>
  </Fragment>
)