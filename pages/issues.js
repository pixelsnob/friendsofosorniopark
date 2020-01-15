
import Layout from '../components/Layout';
import IssuesList from '../components/IssuesList';

export default () => (
  <Layout>

    <article>
      <h2>List of Issues at Osornio Park</h2>

      <IssuesList full={true}/>

    </article>
    
    <style jsx>{`
      .petition-abbreviated li {
        font-weight: bold;
      }
    `}</style>
  </Layout>
);


