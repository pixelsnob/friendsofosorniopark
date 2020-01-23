
import Layout from '../components/Layout';
import IssuesList from '../components/IssuesList';

export default () => (
  <Layout showBackToTopLink={true}>

    <article>
      <h2>List of Issues at Osornio Park</h2>

      <IssuesList full={true}/>

    </article>
    
  </Layout>
);


