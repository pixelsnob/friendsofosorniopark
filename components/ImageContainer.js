
import { Fragment } from 'react';

export default (props) => {

  return (
    <Fragment>
      <figure>
        <img src={props.src} alt={props.caption}/>
        {props.caption ? <figcaption>{props.caption}</figcaption> : ''}
      </figure>
      <style jsx>{`
        
        figure {
          margin: 0;
          padding: 0;
          float: right;
          clear: both;
          width: ${props.width || '50vw'};
          margin: 20px 0 20px 20px;
          
          
        }
        figcaption {
          font-size: 0.9rem;
          line-height: 1.4;
          margin: 0;
          padding: 0;
          font-weight: bold;
        }
        img {
          width: 100%;
          
        }
        @media screen and (max-width: 768px) {
          figure {
            float: none;
            width: 100%;
            margin: 20px 0;
  
          }
        }
      `}</style>
    </Fragment>
  );
}