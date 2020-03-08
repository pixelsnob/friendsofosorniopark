
import Layout from '../components/Layout';
import Head from '../components/Head';
import moment from 'moment';
import { withRouter } from 'next/router';

const Events = ({ events, router }) => (
  <Layout showBackToTopLink={false}>
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
            {events.map(event => {
              console.log(process.env.BASE_URL)
              return (
                <tr key={event._id}>
                  <td>{moment(event.date).format('MMMM D, YYYY')}</td>
                  <td>{moment(event.date).format('h:mma')}</td>
                  <td><a href={event.url} target="_blank" rel="noopener">{event.name}</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br/>
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

Events.getInitialProps = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}api/events`);
    if (res.ok) {
      const events = await res.json();
      return { events };
    } else {
      throw e;
    }
  } catch (e) {
    return { events: [] };
  }
};

export default withRouter(Events);