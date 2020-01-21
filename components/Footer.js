
import { Fragment } from 'react';

export default () => (
  <Fragment>  
    <footer>
      <p>Copyright © {(new Date).getFullYear()} Friends of Osornio Park</p>
      <p><a href="/privacy-policy">Privacy Policy</a></p>
    </footer>
    <style jsx>{`
      footer {
        text-align: center;
        padding-top: 20px;
      }
      p {
        font-size: 0.9rem;
        margin: 0;
      }
    `}</style>
  </Fragment>
)