
import { Fragment } from 'react';
import ImageContainer from '../components/ImageContainer';

export default props => {

  let moreListItems, references;

  if (props.full) {
    moreListItems = (
      <Fragment>
       
        <li>
          During a meeting of the City Council on October 1, 2018,
          a resolution was passed allowing "certain City parks to be posted for access by dogs on leash". Osornio Park, as well as nearby La Bonita Park, were excluded,
          and the reason given was <strong>"due to active youth sports"</strong>, which is vague and does not specify <strong>why dogs on leashes
          are not allowed at the park when it is not in use by active youth sports.</strong>
          <blockquote>
            <p>Public Works Director Saykali presented the staff report. He reported that the purpose of the
            resolution was to designate certain City parks to be posted for access by dogs on leash as follows:
            Brio, Constitution Plaza, Corona, Descanso, El Centro, Guadalupe, Las Lomas, Leslie, Loma
            Norte, Loma Verde, Mahoney, Montwood, Oeste, Old Reservoir, Richard’s, San Miguel De
            Allende, Terazza, Vista De Valle-East, Vista De Valle-West, and Vista Grande. <strong>He stated that
            due to active youth sports, staff recommended the following parks be designated as prohibited
            for access and use by dogs: Estelli, La Bonita, Portola, and Osornio.</strong></p>
            <footer>
              October 1, 2018 <a href="http://www.lahabracity.com/AgendaCenter/ViewFile/Minutes/_10012018-1004" target="_blank">City Council Minutes</a>, page 4
            </footer>
          </blockquote>
        </li>
        
        <li>
          <strong>Since at least 2014, the City of La Habra has been talking about a dog park at Vista Grande Park.<sup><a href="#citation-1">[1]</a></sup></strong> But
          Vista Grande Park <a href="https://www.google.com/maps/place/Vista+Grande+Park/@33.9228485,-117.9600172,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd2ac57cc350cd:0x60c9cd3b90e08d70!8m2!3d33.9228441!4d-117.9578285" target="_blank">(Google Maps)</a>, a former waste landfill<sup><a href="#citation-2">[2]</a></sup>, {/*that the City wants to develop into more sports facilities. */}
          is at least 2 miles from Osornio Park and its surrounding residents.
          And close-by La Bonita Park <a href="https://www.google.com/maps/place/La+Bonita+Park/@33.937307,-117.9640657,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d52dde790b0b:0xa224518a83c83eda!8m2!3d33.937307!4d-117.961877" target="_blank">(Google Maps)</a> is
          also not dog-friendly. <strong>What we need is a dog-friendly option for Osornio Park that does not require a 2-mile drive to another part of La Habra</strong>
        </li>

        <li>
          Community Outreach Meetings were held in the summer of 2019 to gather input into how State of California grant funds could be used to improve certain parks,
          including Osornio Park.
          <ImageContainer src="IMG_20190715_114402.jpg" caption='"City of La Habra Community Outreach for New Park Improvements" flyer, June, 2019'/> If
          grant money is awarded, Osornio Park could get improvements geared towards the community. 
          <strong> But the La Habra Pumas also had a representative at this meeting, showing that if the community remains
          silent, youth sports will continue to influence how our local parks are utilized and developed</strong> 
          

        </li>
      </Fragment>
    );

    references = (
      <section>
        <h2>References</h2>
        <ol>
          <li id="citation-1">
            March 3, 2014 <a href="https://www.lahabracity.com/AgendaCenter/ViewFile/Minutes/_03032014-17" target="_blank">City of La Habra City Council Minutes</a>, page 5
          </li>
          <li id="citation-2">
            August 1, 2019 <a href="https://www.lahabracity.com/DocumentCenter/View/9519/Vista-Grande-Park---SR" target="_blank">City of La Habra Planning Commission Agenda Report</a>, page 3
          </li>
        </ol>
      </section>
    );
  }

  return (
    <Fragment>
      <ul>
        <li>
          <strong>Since 2011, people visiting the park with dogs have been approached by non-City officials threatening that the City of La Habra
          will cite them.</strong> People like the Puma's president, La Habra Heights firefighters, Los Angeles County Sheriff's deputies -- all approached
          park visitors to tell them what to do in a public park -- even when the park 
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
      {references}
      <style jsx>{`
        
      `}</style>
    </Fragment>
  );
}
