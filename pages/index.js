
import { Fragment } from 'react';
import Head from '../components/Head';
import PetitionText from '../components/PetitionText';

const tableRows = [ ...Array(11).keys() ].map((n, i) => {
  
  return (
    <Fragment key={i}>
      <style jsx>{`
        td {
          border-collapse: collapse;
          border: 3px solid #444;
          padding: 5px;
        }
        .name {
          width: 34%;
        }
        .date {
          width: 16%;
        }
        .phone {
          width: 18%
        }
        .email {
          width: 32%;
        }
      `}</style>
      <tr>
        <td className="name">&nbsp;</td>
        <td className="date">&nbsp;</td>
        <td className="phone">&nbsp;</td>
        <td className="email">&nbsp;</td>
      </tr>
    </Fragment>
    
  );
});

const Index = () => (
  <Fragment>
    <Head/>
    <h1>Osornio Park Belongs to the Community!</h1>

    <PetitionText/>
    
    <p className="petition-email">If you are interested in signing this petition, please email <a href="mailto:petition@friendsofosorniopark.org">petition@friendsofosorniopark.org</a></p>
    <br/>
    <table className="petition-list">
      <tbody>
        <tr>
          <th className="name">Name</th>
          <th className="date">Date</th>
          <th className="phone">Phone</th>
          <th className="email">Email</th>
        </tr>
        {tableRows}
      </tbody>
    </table>
    <style jsx>{`
      .petition-email {
        text-align: center;
      }
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
      .name {
        width: 32%;
      }
      .date {
        width: 16%;
      }
      .phone {
        width: 20%
      }
      .email {
        width: 32%;
      }
      
      .petition-list {
        display: none;
      }
      @media print {
        .petition-list {
          display: table;
        }
        .petition-email {
          display: none;
        }
      }
    `}</style>
  </Fragment>
);

export default Index;

