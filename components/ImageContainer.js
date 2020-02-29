
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
          box-shadow: 3px 3px 3px #bbb;
          /*border: 3px solid #aaa;*/
        }
        figcaption {
          font-size: 0.9rem;
          line-height: 1.4;
          margin: 0;
          padding: 15px;
          font-weight: bold;
          /*display: block;*/
          background-color: #e9e9e9;
        }
        img {
          width: 100%;
          display: block;
        }
        
      `}</style>
    </Fragment>
  );
}