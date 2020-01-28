
import Head from '../components/Head';
import { Fragment } from 'react';
import PetitionText from '../components/PetitionText';

export default () => (
  <Fragment>
    <Head/>
    <section>
      <h1>Osornio Park<br/>Belongs to the Community!</h1>

      {/* <p>We are a group of local residents with a common goal: to encourage the City of La Habra to make Osornio Park a more welcoming place for the entire community.
      We are not affiliated with the City of La Habra.</p> */}
      <article>
        <p>Osornio Park, a public park in La Habra, California, is not a friendly park. Since 2012, it has been taken over by City-affiliated sports teams, who use the City and other agencies to intimidate people out of coming to this park, especially if they have dogs.</p>
        <p>Residents have watched over the years while sports teams have taken advantage of their privilege by hanging advertising banners, leaving trash after games, parking wherever they please, holding events when the park is closed by the City for field maintenance, and confronting residents and other park visitors telling them what to do in a public space, and that they will get ticketed by the City for bringing dogs to this park -- even when the park is completely empty.</p>
        <p>We are gathering signatures on a petition to present to the City of La Habra, which states the following:</p>
      </article>
     
      <article>
        <ol className="petition-abbreviated">
          <li>That the City of La Habra hold sports teams that use Osornio Park more accountable</li>
          <li>That the City of La Habra allow leashed dogs at Osornio Park</li>
          <li>That the City of La Habra take the community into account when making changes and improvements to Osornio Park</li>
        </ol>
      </article>
      <article>
        <p className="sign">To read and sign the full petition, please visit <strong>friendsofosorniopark.org</strong></p>
      </article>
    </section>
    <footer>
      January 2020
    </footer>
    <style jsx>{`
      h1 {
        font-size: 4.3vh;
        margin-bottom: 3vh;
      }
      p, li {
        font-size: 2vh;
        line-height: 1.6;
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
        font-size: 1.4vh;
      }
    `}</style>
  </Fragment> 
);


