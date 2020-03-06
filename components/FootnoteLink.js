
import { Fragment } from 'react';

export default props => {
  return (
    <Fragment>
      
      <a className="footnote" href={"#" + props.href}>{props.children}</a>
      <style jsx>{`
        
      `}</style>
    </Fragment>
  );
}
