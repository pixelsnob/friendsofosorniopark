
import Layout from '../components/Layout';
import ImageContainer from '../components/ImageContainer';

export default () => (
  <Layout>
    
    <h1>Friends of Osornio Park</h1>
    
    <p>
      We are a group of local residents with a common goal: to encourage the City of La Habra to make Osornio Park a more welcoming place for the entire community.
      We are not affiliated with the City of La Habra.
    </p>

    <section className="articles">
      <article>
        <h2>Where is Osornio Park?</h2>
        <p>
          Osornio Park is a public park about a half mile north of Whittier Blvd on Hacienda Road in
          La Habra, California <a href="https://www.google.com/maps/place/Osornio+Park/@33.9455184,-117.9679094,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d52420524789:0x953ec5839822663e!8m2!3d33.945514!4d-117.9657207" target="_blank">(Google Maps)</a>. The park
          used to be the playground and sports field for Hacienda School, until the school closed in 1989<sup><a href="#citation-1">[1]</a></sup>.
        </p>
        <ImageContainer src={require('../images/IMG_0136.JPG')} alt="Osornio Park in 2010, La Habra, California"/>


        <p>
          In 2001, the City of La Habra dedicated the park to Michael Osornio, who was killed by a drunk driver while on duty in 1994<sup><a href="#citation-2">[2]</a></sup>.
          The park remained basically untouched, and looked like the schoolyard that it once was until about 2010. It was enjoyed by residents,
          who would gather in the only open space in this area not already taken up by sports facilities, schools, or businesses.
        </p>
        <ImageContainer src={require('../images/IMG_20191105_151138.jpg')} alt="Memorial for Michael A. Osornio at Osornio Park, La Habra, California"/>


        <p>
          In 2012, the City of La Habra decided to dedicate the park to the Pumas, a City-affiliated youth soccer team<sup><a href="#citation-3">[3]</a></sup>. The Pumas were awarded
          around $100,000 in state parks funds<sup><a href="#citation-4">[4]</a></sup>, which they used to convert Osornio Park into a soccer facility. Trees were removed, as well
          as a walking trail and exercise equipment that residents would use. Fences and locking gates were added, as well as "No Animals in Park"
          signs.
        </p>

        <ImageContainer src={require('../images/IMG_20191012_145835.jpg')} alt="Osornio Park: the least friendly park in Southern California"/>

        <ImageContainer src={require('../images/IMG_20191012_145954.jpg')} alt="'No Animals in Park' sign at Osornio Park, La Habra, California"/>

      </article>

      <article>
        <h2>Park Issues</h2>

        <ImageContainer src={require('../images/PSX_20191026_203307.jpg')} alt="Soccer team parents parking on the basketball courts at Osornio Park, La Habra, California"/>

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
            <strong>For some reason, the signs that say "No Animals in Park" point to <a href="http://qcode.us/codes/lahabra/view.php?topic=6-6_04-6_04_150&frames=on" title="Link to La Habra Municipal Code 6.04.150">La Habra Municipal Code 6.04.150</a></strong>,
            which states <em>"Quarantine" means isolation of a dog or other animal in an enclosure or other environment so that the dog or animal cannot be subject to other animals
            or unauthorized persons. (Ord. 1627 § 1, 2003)</em>
          </li>
          <li>
            The latest <a href="https://www.lahabracity.com/DocumentCenter/View/7325/2018-sport-affiliate-park-use-calendars?bidId=" target="_blank" title="Link to La Habra's Sports Affiliate Facility Usage Calendar">Sports Affiliate Facility Usage Calendar</a> available
            is for 2018, so <strong>the public has no easy way to find out who has permission by the City to play at Osornio Park</strong>
          </li>
        </ul>

        <ImageContainer src={require('../images/IMG_20190128_133052.jpg')} alt="Osornio Park locked and closed to the public, La Habra, California"/>


      </article>
      
      <article>
        <h2>What We Propose</h2>
        <p>
          We are asking that the City of La Habra, whose motto is "A Caring Community", to care more about how their relationship with organized
          sports teams affects the surrounding community.
        </p>
        <p>We are circulating a petition that asks for the following:</p>

        <ol className="petition-abbreviated">
          <li>That the City of La Habra hold sports teams that use Osornio Park more accountable</li>
          <li>That the City of La Habra allow leashed dogs at Osornio Park</li>
          <li>That the City of La Habra take the community into account when making changes and improvements to Osornio Park</li>
        </ol>

        <p><a href="/petition">Read the full petition here</a></p>
        <p>
          If you would like to add your signature to this petition, please email <a href="mailto:petition@friendsofosorniopark.org">petition@friendsofosorniopark.org</a>
        </p>
        
      </article>

      <article>
        <h2>How You can Help</h2>
        
        <p>
          There are several reviews by residents on <a target="_blank" href="https://www.google.com/maps/place/Osornio+Park/@33.945514,-117.9657207,15z/data=!4m5!3m4!1s0x0:0x953ec5839822663e!8m2!3d33.945514!4d-117.9657207">the Osornio Park listing on Google Maps</a> that
          talk about these issues. There is also <a target="_blank" href="https://www.google.com/maps/contrib/106685374889606612264/place/ChIJiUdSICTVwoARPmYimIPFPpU/@33.945514,-117.9679094,16z/data=!4m6!1m5!8m4!1e1!2s106685374889606612264!3m1!1e1?hl=en-US">a review by the head of the La Habra Pumas soccer team, where he blames
          "pet owners" for dog waste</a>. Please read these reviews and consider leaving a review of your own if you have encountered issues
          at Osornio Park.
        </p>

        <p>
          If you have pictures of Osornio Park that you would like to share, especially those taken before the soccer remodel, please let us know
          at <a href="mailto:info@friendsofosorniopark.org">info@friendsofosorniopark.org</a>
        </p>

      </article>
      
      <article>
        <h2>References</h2>
          <ol>
          <li id="citation-1">
            <a target="_blank" href="https://www.cde.ca.gov/schooldirectory/details?cdscode=19647666020143">Hacienda School</a> -
            California School Directory - 
            California Dept. of Education
          </li>
          <li id="citation-2">
            <a target="_blank" href="https://www.latimes.com/archives/la-xpm-2001-may-02-me-58275-story.html">"La Habra to Rename Park After Officer"</a> - Los Angeles Times - May 2, 2001
          </li>
          <li id="citation-3">
            <a target="_blank" href="https://www.flickr.com/photos/calsouthsoccerfoundation/6646253811/in/photostream/">Osornio Park Opening Ceremony 38</a> - Cal South Youth Soccer Foundation
          </li>
          <li id="citation-4">
            <a target="_blank" href="https://www.parksforcalifornia.org/grants">Grants</a> - Parks for All Californians 
          </li>
        </ol>
      </article>
    </section>
    <style jsx global>{`
      .petition-abbreviated li {
        font-weight: bold;
      }
    `}</style>
  </Layout>
);


