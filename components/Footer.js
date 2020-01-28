
import { Fragment } from 'react';

export default () => (
  <Fragment>  
    <footer className="noprint">
      <p>Copyright © {(new Date).getFullYear()} Friends of Osornio Park</p>
      <p><a href="/privacy-policy">Privacy Policy</a></p>
    </footer>
    <style jsx>{`
      footer {
        text-align: center;
        padding-top: 10px;
        border-color: #ddd;
        border-width: 3px 0 0;
        border-style: solid;
        clear: both;
      }
      p {
        font-size: 0.9rem;
        margin: 0;
      }
      
    `}</style>
  </Fragment>
)