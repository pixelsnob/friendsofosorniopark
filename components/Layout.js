import { Fragment } from 'react';
import Head from './Head';
import Footer from './Footer';
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
    <Footer/>
    <style jsx>{`
      .nav-container {
        padding-top: 18px;
      }
    `}</style>

    <style jsx global>{`
      
      /*** Global styles ***/

      body {
        font-family: 'Montserrat';
        font-size: 1.1rem;
        line-height: 1.7;
        padding: 10px;
      }
      a:link, a:visited, a:active, a:hover {
        color: green;
        font-weight: bold;
      }
      a:hover {
        color: #444;
      }
      nav a {
        text-decoration: none;
      }
      a.loud {
        background-color: green;
        color: white;
        padding: 1px 3px;
        text-decoration: none;
      }
      a.loud:hover {
        background-color: #444;
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
      ul {
        margin: 0;
        padding-left: 25px;
      }
      li {
        margin: 0;
      }
      blockquote {
        background-color: #eee;
        margin-left: 20px;
        padding: 15px;
      }
      blockquote p:first-child {
        margin-top: 0;
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