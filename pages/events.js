import { Fragment } from 'react';
import Layout from '../components/Layout';
import ImageContainer from '../components/ImageContainer';
import FootnoteLink from '../components/FootnoteLink';
import Head from '../components/Head';

// const summary = 'Friends of Osornio Park is a group of residents with a common goal: to help make Osornio Park a more welcoming place for the entire community. We are not affiliated with the City of La Habra.';
// const affiliatePolicyLink = 
//   <a href="http://www.lahabracity.com/DocumentCenter/View/9984/City-of-La-Habra-Sport-Affiliate-Policy-PDF" target="_blank">
//     City of La Habra Sports Affiliate Policy
//   </a>
// ;

// const WrappedImageContainer = props => (
//   <Fragment>
//     <div className="image-container-wrapper">
//       <ImageContainer {...props}/>
//     </div>
//     <style jsx>{`
//       .image-container-wrapper {
//         padding: 0;
        
//         float: right;
//         clear: both;
//         width: 50vw;
//         margin: 30px 0 30px 30px;
//       }
      
//       @media screen and (max-width: 768px) {
//         .image-container-wrapper {
//           float: none;
//           width: 100%;
//           margin: 20px 0;
//         }
//       }
//       @media screen and (min-width: 1200px) {
//         .image-container-wrapper {
//           width: 40vw;
//         }
//       }
//     `}</style>
//   </Fragment>
// );

export default () => (
  <Layout showBackToTopLink={true}>
    <Head>
      <meta name="description" content="A schedule of upcoming events at Osornio Park, gathered from multiple sources"/>
    </Head>
    
    <div className="articles">
      <article>
        <h2>Scheduled Events</h2>
        <p>
          This is a list of upcoming City-authorized events at Osornio Park, gathered from publicly available sources. This is not an official list from 
          the City of La Habra.
        </p>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Event</th>
            </tr>    
          </thead>
          <tbody>
            <tr>
              <td>
                Sunday, March 8, 2020
              </td>
              <td>2:00pm</td>
              <td>
                <a href="https://www.socalpremier.org/game/show/28068782?subseason=642569&referrer=5338552" target="_blank">
                  NELA FC vs. Pumas La Habra
                </a>
              </td>
            </tr>
          </tbody>
        </table>

      </article>
    </div>
    <style jsx>{`
      table {
        border-collapse: collapse;
      }
      td, th {
        border: 3px solid #ddd;
        padding: 5px 15px;
        line-height: 1.2;
      }
    `}</style>
  </Layout>
);


