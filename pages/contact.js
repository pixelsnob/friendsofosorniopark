
import Layout from '../components/Layout';
import Head from '../components/Head';

export default () => (
  <Layout showBackToTopLink={false}>
    <Head>
      <title>Friends of Osornio Park | Contact Us</title>

      <meta name="description" content="Contact Friends of Osornio Park: info@friendsofosorniopark.org"/>
    </Head>
    
    <div className="articles">
      <article>
        <h2>Contact Friends of Osornio Park</h2>
        <p>For questions, comments, or to report a site error or inaccuracy, please contact <a href="mailto:info@friendsofosorniopark.org">info@friendsofosorniopark.org</a></p>
        <p>Site admin: Luis A. Echeverria | <a href="https://pixelsnob.com">pixelsnob</a> | <a href="mailto:pixelsnob@gmail.com">pixelsnob@gmail.com</a></p>
      </article>
    </div>

  </Layout>
);


