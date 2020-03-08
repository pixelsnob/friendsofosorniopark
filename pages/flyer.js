
import Head from '../components/Head';

export default () => (
  <>
    <Head>
      <title>Friends of Osornio Park | Printable Flyer</title>
      <meta name="description" content="Printable flyer with information about Friends of Osornio Park."/>
    </Head>
    <section>
      <h1>Osornio Park<br/>Belongs to the Community!</h1>

      <article>
        <p>Osornio Park, a public park in La Habra, California, is not a friendly park. Since 2012, it has been taken over by City-affiliated sports teams, who use the City and other agencies to intimidate people out of coming to this park, especially if they have dogs.</p>
        <p>Residents have watched over the years while sports teams have taken advantage of their privilege by hanging advertising banners, leaving trash after games, parking wherever they please, holding events when the park is closed by the City for field maintenance, and confronting residents and other park visitors telling them what to do in a public space, and that they will get ticketed by the City for bringing dogs to this park -- even when the park is completely empty.</p>
        <p>We are gathering signatures on a petition to present to the City of La Habra that states the following:</p>
      </article>
     
      <article>
        <ol className="petition-abbreviated">
          <li>That the City of La Habra hold sports teams that use Osornio Park more accountable</li>
          <li>That the City of La Habra allow leashed dogs at Osornio Park</li>
          <li>That the City of La Habra take the community into account when making changes and improvements to Osornio Park</li>
        </ol>
      </article>
      <article>
        <p className="sign">To read and sign the full petition, visit <strong>friendsofosorniopark.org</strong></p>
      </article>
    </section>
    <footer>
      January 2020
    </footer>
    <style jsx>{`
      @media print {
        section {
          border: 3px solid #999;
          padding: 4.2vh 4.2vw 1vh 4.2vw;
        }
      }
      
      h1 {
        font-size: 4vh;
        margin-bottom: 2vh;
      }
      p, li {
        font-size: 2vh;
        line-height: 1.4;
      }
      li {
        font-weight: bold;
      }
      .sign {
        font-size: 2.6vh;
        text-align: center;
      }
      footer {
        text-align: left;
        font-size: 1.2vh;
      }
    `}</style>
  </> 
);


