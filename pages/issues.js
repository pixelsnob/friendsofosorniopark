
import Layout from '../components/Layout';
import IssuesList from '../components/IssuesList';
import Head from '../components/Head';

export default () => (
  <Layout showBackToTopLink={true}>
    <Head>
      <title>Friends of Osornio Park | Osornio Park Issues and Problems</title>
      <meta name="description" content="Issues, problems, and concerns about Osornio Park and how it is managed and used."/>
    </Head>
    <article>
      <h2>List of Issues at Osornio Park</h2>

      <IssuesList full={true}/>
    </article>
  </Layout>
);


