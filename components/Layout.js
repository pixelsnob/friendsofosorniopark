import { Fragment } from 'react';
import Head from './Head';
import Nav from './Nav';

//import Link from 'next/link';

export default props => (
  <Fragment>
    <Head/>
    <h1><a href="/" title="Friends of Osornio Park">Friends of Osornio Park</a></h1>
    <div className="content">
      <div className="nav-container">
        <Nav/>
      </div>
      <div className="layout">
        {props.children}
      </div>
    </div>
    <style jsx global>{`
      
      /*** Global styles ***/

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
      nav a {
        text-decoration: none;
      }
      h1 { 
        text-align: center;
        margin: 0;
        line-height: 1.3;
        padding-bottom: 10px;
      }
      h1 a {
        text-decoration: none;
      }
      h2 {
        text-align: center;
      }
      .content {
        
      }
      .nav-container {
        padding-top: 18px;
      }
      ul {
        margin: 0;
        padding-left: 20px;
      }
      ul > li {
        list-style-type: "»  ";
        padding: 0 0 14px 0;
      }
      li {
        
        
        margin: 0;
      }
      ol[type="a"] li {
        padding: 0;
      }
      
      @media screen and (max-width: 768px) {
        
      }
      @media print {
        nav, h1 {
          display: none;
        }
        h2 {
          font-size: 2.2rem;
          margin: 0;
        }
      }
    `}</style>
  </Fragment> 
)