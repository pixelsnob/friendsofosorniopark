
import { Fragment } from 'react';
//import Link from 'next/link';

export default (props) => {

  return (
    <Fragment>
      <span className="image-container">
        <img src={props.src} alt={props.alt}/>
      </span>
      <style jsx>{`
        .image-container {
          float: right;
          clear: both;
          width: 50vw;
          margin: 15px 0 15px 15px;

        }
        .image-container img {
          width: 100%;
        }
        @media screen and (max-width: 768px) {
          .image-container {
            float: none;
            width: 100%;
            margin: 0;
  
          }
        }
      `}</style>
    </Fragment>
  );
}