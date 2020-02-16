
import { Fragment } from 'react';

export default (props) => {
  
  const image = require(`../images/${props.src}?resize&size=800`);

  return (
    <Fragment>
      <figure>
        <img src={image.src} alt={props.caption}/>
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
          background: #eee;
          
        }
        figcaption {
          font-size: 0.9rem;
          line-height: 1.4;
          margin: 0;
          padding: 5px 10px 15px 10px;
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
        @media screen and (min-width: 1200px) {
          figure {
            width: ${props.width || '40vw'};
          }
        }
      `}</style>
    </Fragment>
  );
}