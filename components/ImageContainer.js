
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
          width: 100%;
          background: #f6f6f6;
          border: 3px solid #aaa;
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
        
      `}</style>
    </Fragment>
  );
}