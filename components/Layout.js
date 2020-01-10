import { Fragment } from 'react';
import Head from './Head';

//import Link from 'next/link';

export default props => (
  <Fragment>
    <Head/>
    <div className="layout">
      {props.children}
    </div>
    <style jsx>{`
      .layout {
        
      }
    `}
    </style>

    <style jsx global>{`
      h1 { 
        text-align: center;
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