
import { Fragment } from 'react';
import PetitionText from '../components/PetitionText';
import Layout from '../components/Layout';
import Head from '../components/Head';

const tableRows = [ ...Array(12).keys() ].map((n, i) => {
  
  return (
    <Fragment key={i}>
      <style jsx>{`
        td {
          border-collapse: collapse;
          border: 3px solid #444;
          padding: 5px;
        }
        .name {
          width: 25%;
        }
        .signature {
          width: 25%;
        }
        .date {
          width: 14%;
        }
        /*.phone {
          width: 16%;
        }*/
        .email-phone {
          width: 36%;
        }
      `}</style>
      <tr>
        <td className="name">&nbsp;</td>
        <td className="signature">&nbsp;</td>
        <td className="date">&nbsp;</td>
        <td className="email-phone">&nbsp;</td>
      </tr>
    </Fragment>
  );
});

const Index = () => (
  <Layout>
    <Head>
      <title>Friends of Osornio Park | Petition to the City of La Habra</title>
      <meta name="description" content="Petition to the City of La Habra to make Osornio Park a friendlier place for the entire community."/>
    </Head>

    <h2>Osornio Park Belongs to the Community!</h2>
    <p className="intro">We, the undersigned, request the following:</p>

    <PetitionText/>
    
    <p className="petition-email">If you are interested in signing this petition, please email <a href="mailto:petition@friendsofosorniopark.org">petition@friendsofosorniopark.org</a></p>
    <p className="change-org-link-container"><a rel="nofollow" target="_blank" rel="noopener" href="https://www.change.org/p/return-osornio-park-to-the-community">Or sign the petition on change.org</a></p>

    <table className="petition-list">
      <tbody>
        <tr>
          <th className="name">Name</th>
          <th className="signature">Signature</th>

          <th className="date">Date</th>
          <th className="email-phone">Email/Phone</th>
        </tr>
        {tableRows}
      </tbody>
    </table>
    <style jsx>{`
      
      table {
        width: 100%;
        table-layout: auto;
      }
      table,
      td,
      th {
        border-collapse: collapse;
      }
      td, th {
        border: 3px solid #444;
        padding: 5px;
      }
      .intro {
        
      }
      .name {
        width: 25%;
      }
      .signature {
        width: 25%;
      }
      .date {
        width: 14%;
      }
      .phone {
        width: 16%;
      }
      .email {
        width: 20%;
      }
      
      .petition-list {
        display: none;
      }
      @media print {
        h2 {
          text-align: center;
          margin: 0;
          padding: 0;
          line-height: 1;
        }
        .petition-list {
          display: table;
        }
        .petition-email, .print-petition, .change-org-link-container {
          display: none;
        }
      }
    `}</style>
  </Layout>
);

export default Index;

