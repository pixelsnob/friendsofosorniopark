
import { Fragment } from 'react';

export default (props) => {
  
  //  const oneSize = require('./images/my-image.jpg?resize&size=300');
  const multipleSizes = require(`../images/${props.src}?resize&sizes[]=500&sizes[]=900`);
  //console.log('multipleSizes', multipleSizes)

  return (
    <Fragment>
      <figure>        
        {/* <img src={require(`../images/${props.src}`)} alt={props.caption}/> */}
        <img srcSet={multipleSizes.srcSet} sizes="(max-width: 500px) 500px, 900px" src={multipleSizes.src} />

        {/* <picture>
          <source srcSet={multipleSizes[0]} media="(min-width: 992px)" />
          <source srcSet={multipleSizes[1]} media="(max-width: 993px)" />
          <img src={multipleSizes.src} />
        </picture> */}

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