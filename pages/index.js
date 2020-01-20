
import Layout from '../components/Layout';
import ImageContainer from '../components/ImageContainer';
import IssuesList from '../components/IssuesList';

export default () => (
  <Layout>
    
    
    <p>
      We are a group of local residents with a common goal: to encourage the City of La Habra to make Osornio Park a more welcoming place for the entire community.
      We are not affiliated with the City of La Habra.
    </p>

    <div className="articles">
      <article>
        <h2>Where is Osornio Park?</h2>
        <p>
          Osornio Park is a public park about a half mile north of Whittier Blvd on Hacienda Road in
          La Habra, California <a href="https://www.google.com/maps/place/Osornio+Park/@33.9455184,-117.9679094,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d52420524789:0x953ec5839822663e!8m2!3d33.945514!4d-117.9657207" target="_blank">(Google Maps)</a>. The park
          used to be the playground and sports field for Hacienda School, until the school closed in 1989<sup><a href="#citation-1">[1]</a></sup>.
        </p>
        <ImageContainer src={require('../images/IMG_0136.jpg')} alt="Osornio Park in 2010, La Habra, California"/>


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


        <IssuesList/>
        <p><a href="/issues">Full list of Issues</a></p>

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
          If you would like to add your hand-written signature to this petition, please email <a href="mailto:petition@friendsofosorniopark.org">petition@friendsofosorniopark.org</a>
        </p>
        
        <p><strong><a className="loud" href="https://www.change.org/p/return-osornio-park-to-the-community" target="_blank">Or sign the petition on change.org</a></strong></p>
      </article>

      <article>
        <h2>How to Get Involved</h2>
        <ul>
          <li>
            There are several reviews by residents on <a target="_blank" href="https://www.google.com/maps/place/Osornio+Park/@33.945514,-117.9657207,15z/data=!4m5!3m4!1s0x0:0x953ec5839822663e!8m2!3d33.945514!4d-117.9657207">the Osornio Park listing on Google Maps</a> that
            talk about these issues. There is also <a target="_blank" href="https://www.google.com/maps/contrib/106685374889606612264/place/ChIJiUdSICTVwoARPmYimIPFPpU/@33.945514,-117.9679094,16z/data=!4m6!1m5!8m4!1e1!2s106685374889606612264!3m1!1e1?hl=en-US">a review by the head of the La Habra Pumas soccer team, where he blames
            "pet owners" for dog waste</a>. Please read these reviews and consider leaving a review of your own if you have encountered issues
            at Osornio Park
          </li>

          <li>
            If you have pictures of Osornio Park that you would like to share, especially those taken before the soccer remodel, please let us know
            at <a href="mailto:info@friendsofosorniopark.org">info@friendsofosorniopark.org</a>
          </li>

          <li>
            Voice your concerns to the City by contacting the Recreation Division of
            the <a href="https://www.lahabracity.com/321/Community-Services" target="_blank">La Habra Community Services Department</a>
          </li>
        </ul>
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
    </div>
    <style jsx>{`
      .petition-abbreviated li {
        font-weight: bold;
      }
    `}</style>
  </Layout>
);


