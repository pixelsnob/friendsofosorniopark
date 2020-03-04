
import ImageContainer from '../components/ImageContainer';
import { Fragment } from 'react';

export default props => (
  <Fragment>
    <div className="image-container-wrapper">
      <ImageContainer {...props}/>
    </div>
    <style jsx>{`
      .image-container-wrapper {
        padding: 0;
        
        float: right;
        clear: both;
        width: 50vw;
        margin: 30px 0 30px 30px;
      }
      
      @media screen and (max-width: 768px) {
        .image-container-wrapper {
          float: none;
          width: 100%;
          margin: 20px 0;
        }
      }
      @media screen and (min-width: 1200px) {
        .image-container-wrapper {
          width: 40vw;
        }
      }
    `}</style>
  </Fragment>
);