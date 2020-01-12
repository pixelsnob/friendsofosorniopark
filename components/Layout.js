import { Fragment } from 'react';
import Head from './Head';

//import Link from 'next/link';

export default props => (
  <Fragment>
    <Head/>
    <div className="layout">
      {props.children}
    </div>
    
  </Fragment> 
)