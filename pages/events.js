
import Layout from '../components/Layout';
import Head from '../components/Head';

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


