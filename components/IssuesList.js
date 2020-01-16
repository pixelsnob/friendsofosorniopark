
import { Fragment } from 'react';

export default props => {

  let moreListItems;

  if (props.full) {
    moreListItems = (
      <Fragment>
       
        <li>
          During a meeting of the City Council on October 1, 2018,
          a resolution was passed allowing "certain City parks to be posted for access by dogs on leash". Osornio Park, as well as nearby La Bonita Park, were excluded,
          and the reason given was <em>"...due to active youth sports"</em>, which is vague and does not specify <strong>why dogs on leashes
          are not allowed at the park when it is not in use by active youth sports.</strong><br/> From page 4 of
          the <a href="http://www.lahabracity.com/AgendaCenter/ViewFile/Minutes/_10012018-1004" target="_blank">City Council Minutes</a>:
          <blockquote>
            Public Works Director Saykali presented the staff report. He reported that the purpose of the
            resolution was to designate certain City parks to be posted for access by dogs on leash as follows:
            Brio, Constitution Plaza, Corona, Descanso, El Centro, Guadalupe, Las Lomas, Leslie, Loma
            Norte, Loma Verde, Mahoney, Montwood, Oeste, Old Reservoir, Richard’s, San Miguel De
            Allende, Terazza, Vista De Valle-East, Vista De Valle-West, and Vista Grande. <strong>He stated that
            due to active youth sports, staff recommended the following parks be designated as prohibited
            for access and use by dogs: Estelli, La Bonita, Portola, and Osornio.</strong>
          </blockquote>
        </li>
        
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ul>
        <li>
          <strong>Since 2011, people visiting the park with dogs have been approached by non-City officials threatening that the City of La Habra
          will cite them.</strong> People like the Puma's president, La Habra Heights firefighters, and Christian School employees, all approached
          local residents to tell them what to do in a public park -- even when the park 
          wasn't in use by sports teams, or anyone at all
        </li>
        <li>
          
          <strong>The park gets closed every winter for maintenance, and is sometimes completely locked so that the public can't access it, but sports teams
          continue to hold practices and games</strong>. See <a href="/sports-teams-and-the-community">Sports Teams and the Community</a> for more details
          
        </li>
        <li>
          There are only two parking spots for the entire park, so <strong>sports team parents park on the basketball court, and have caused parking
          issues for the immediate neighbors</strong>
        </li>
        <li>
          <strong>For some reason, the signs that say "No Animals in Park" point to <a href="http://qcode.us/codes/lahabra/view.php?topic=6-6_04-6_04_150&frames=on" title="Link to La Habra Municipal Code 6.04.150" target="_blank">La Habra Municipal Code 6.04.150</a></strong>,
          which states <em>"Quarantine" means isolation of a dog or other animal in an enclosure or other environment so that the dog or animal cannot be subject to other animals
          or unauthorized persons. (Ord. 1627 § 1, 2003)</em>
        </li>

        {moreListItems}
      
      </ul>
      <style jsx>{`
        
      `}</style>
    </Fragment>
  );
}