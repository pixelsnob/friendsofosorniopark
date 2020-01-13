
import { Fragment } from 'react';

export default props => {

  let moreListItems;

  // if (props.full) {
  //   moreListItems = (
  //     <li>
  //       More
  //     </li>
  //   );
  // }

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
          continue to hold practices and games</strong>
          
        </li>
        <li>
          There are only two parking spots for the entire park, so <strong>sports team parents park on the basketball court, and have caused parking
          issues for the immediate neighbors</strong>
        </li>
        <li>
          The <a href="http://www.lhcm.org/DocumentCenter/View/9212/City-of-La-Habra-Sport-Affiliate-Policy-PDF" target="_blank" title="Link to La Habra's Sports Affiliate Policy on their website">link to La Habra's "Sports Affiliate Policy"</a> is
          broken, so <strong>currently, there is no easy way to see what rules youth sports teams must abide by</strong>
        </li>
        <li>
          <strong>For some reason, the signs that say "No Animals in Park" point to <a href="http://qcode.us/codes/lahabra/view.php?topic=6-6_04-6_04_150&frames=on" title="Link to La Habra Municipal Code 6.04.150" target="_blank">La Habra Municipal Code 6.04.150</a></strong>,
          which states <em>"Quarantine" means isolation of a dog or other animal in an enclosure or other environment so that the dog or animal cannot be subject to other animals
          or unauthorized persons. (Ord. 1627 § 1, 2003)</em>
        </li>
        <li>
          The latest <a href="https://www.lahabracity.com/DocumentCenter/View/7325/2018-sport-affiliate-park-use-calendars?bidId=" target="_blank" title="Link to La Habra's Sports Affiliate Facility Usage Calendar">Sports Affiliate Facility Usage Calendar</a> available
          is for 2018, so <strong>the public has no easy way to find out who has permission by the City to play at Osornio Park</strong>
        </li>

        {moreListItems}
      
      </ul>
      <style jsx>{`
        
      `}</style>
    </Fragment>
  );
}