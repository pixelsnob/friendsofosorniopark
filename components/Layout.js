import Link from 'next/link';
import Footer from './Footer';
import Nav from './Nav';
import BackToTopLink from './BackToTopLink';


export default props => (
  <>
    
    <h1 className="noprint"><Link href="/"><a title="Friends of Osornio Park">Friends of Osornio Park</a></Link></h1>
    <div className="content">
      <div className="nav-container">
        <Nav/>
      </div>
      <div className="layout">
        {props.children}
      </div>
    </div>
    {props.showBackToTopLink ? <BackToTopLink/> : ''}
    <Footer/>
    <style jsx>{`
      .nav-container {
        padding-top: 18px;
      }
    `}</style>
  </> 
)