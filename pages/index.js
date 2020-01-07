
import { Fragment } from 'react';
import Head from '../components/Head';
import Nav from '../components/Nav';
import PetitionText from '../components/PetitionText';

export default () => (
  <Fragment>
    <Head/>
    
    <h1>Friends of Osornio Park</h1>

    {/* <p>
      We are a group of local residents concerned about how Osornio Park has been managed and utilized over the last few years.
      We are seeking policy changes that will make Osornio Park a more welcoming place for everyone in the community, not just
      city-affiliated sports teams.
    </p> */}
    
    <p>
      We are a group of local residents with a common goal: to help make Osornio Park a more welcoming place for the entire community.
      We are not affiliated with the City of La Habra.
    </p>

    <article>
      <h2>Where is Osornio Park?</h2>
      <p>
        Osornio Park is a public park about a half mile north of Whittier Blvd on Hacienda Road in
        La Habra, California. The park
        used to be the playground and sports field for Hacienda School, until the school closed in the 1980s.
      </p>
      <p>
        In 2001, the City of La Habra dedicated the park to Michael Osornio, who was killed by a drunk driver while on duty in 1994.
        The park remained basically untouched, and looked like the schoolyard that it once was until about 2010. It was enjoyed by residents,
        who would gather in the only open space in this area not already taken up by sports facilities, schools, or businesses.
      </p>
      <p>
        In 2012, the City of La Habra decided to dedicate the park to the Pumas, a City-affiliated youth soccer team. The Pumas were awarded
        around $100,000 in state parks funds, which they used to convert Osornio Park into a soccer facility. Trees were removed, as well
        as a walking trail and exercise equipment that residents would use. Fences and locking gates were added, as well as "No Animals in Park"
        signs.
      </p>
    </article>
    <article>
      <h2>Park Issues</h2>
      <ul>
        <li>
          Since 2011, people visiting the park with dogs have been approached by non-City officials threatening that the City of La Habra
          will cite them.
          People like the Puma's president, La Habra Heights firefighters, and Christian School employees, all approached
          local residents to tell them what to do in a public park -- even when the park 
          wasn't in use by sports teams, or anyone at all
        </li>
        <li>
          Residents watched while Osornio Park became littered with trash after games, and advertising banners
          were hung on the fences.
        </li>
        <li>
          The park gets closed every winter for maintenance, and is sometimes completely locked so that the public can't access it, but sports teams
          continue to hold practices and games
        </li>
        <li>
          Sports teams parents park where they please, on the basketball courts, and block neighbor's driveways when there are games
        </li>
      </ul>
      
    </article>
    
    <article>
      <h2>What We Propose</h2>
      <p>
        We are asking that the City of La Habra, whose motto is "A Caring Community", to care about everyone in the community --
        not just the city's own sports teams.
      </p>
      <p>We propose the following:</p>

      <PetitionText/>

    </article>


    <style jsx>{`
      
    `}</style>
  </Fragment>
);

//export default Index;

