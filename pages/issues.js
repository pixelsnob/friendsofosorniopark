
import Layout from '../components/Layout';
import IssuesList from '../components/IssuesList';

export default () => (
  <Layout>

    <article>
      <h2>List of Issues and Incidents at Osornio Park</h2>
      <p>As reported by the community.</p>

      <IssuesList full={true}/>
    </article>
    
    <style jsx>{`
      .petition-abbreviated li {
        font-weight: bold;
      }
    `}</style>
  </Layout>
);


