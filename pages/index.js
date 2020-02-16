
import Layout from '../components/Layout';
import ImageContainer from '../components/ImageContainer';
import FootnoteLink from '../components/FootnoteLink';
import Head from '../components/Head';

const summary = 'Friends of Osornio Park is a group of residents with a common goal: to encourage the City of La Habra to make Osornio Park a more welcoming place for the entire community. We are not affiliated with the City of La Habra.';

export default () => (
  <Layout showBackToTopLink={true}>
    <Head>
      <meta name="description" content={summary}/>
    </Head>
    <p>{summary}</p>
    <ImageContainer src="IMG_0136.jpg" caption="Osornio Park in 2010"/>

    <div className="articles">
      <article>
        <h2>About Osornio Park</h2>
        <p>
          Osornio Park is a public park about a half mile north of Whittier Blvd on Hacienda Road in
          La Habra, California <a href="https://www.google.com/maps/place/Osornio+Park/@33.9455184,-117.9679094,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d52420524789:0x953ec5839822663e!8m2!3d33.945514!4d-117.9657207" target="_blank">(Google Maps)</a>. The park
          used to be the playground and sports field for Hacienda School, until the school closed in 1989<FootnoteLink name="hacienda-school"/>.
        </p>

        <p>
          In 2001, the City of La Habra dedicated the park to Michael Osornio, who was killed by a drunk driver while on duty in 1994<FootnoteLink name="la-times-article"/>.
          The park remained basically untouched, and looked like the schoolyard that it once was until about 2010. It was enjoyed by residents,
          who would gather in the only open space in this area not already taken up by sports facilities, schools, or businesses.
        </p>
        <ImageContainer src="IMG_20191105_151138.jpg" caption="Memorial for Michael A. Osornio at Osornio Park"/>

        <p>
          In 2012, the City of La Habra decided to dedicate the park to the Pumas, a City-affiliated youth soccer team<FootnoteLink name="opening-ceremony"/>. The Pumas were awarded
          around $100,000 in state parks funds<FootnoteLink name="park-grants"/>, which they used to convert Osornio Park into a soccer facility. Trees were removed, as well
          as a walking trail and exercise equipment that residents would use. Fences and locking gates were added, as well as "No Animals in Park"
          signs.
        </p>

        <ImageContainer src="IMG_20191012_145835.jpg" caption="Osornio Park: the least friendly park in Southern California"/>

        {/* <ImageContainer src={'IMG_20191012_145954.jpg'} caption='"No Animals in Park" sign at Osornio Park'/> */}

      </article>

      <article>
        <h2>Park Issues</h2>
        <ul>
          <li>
            <strong>Since 2011, people visiting the park with dogs have been approached by non-City officials threatening that the City of La Habra
            will cite them -- even when the park wasn't in use by anyone at all</strong>
          </li>
          <li>
            <strong>The park gets closed every winter for maintenance, and is sometimes completely locked so that the public can't access it, but sports teams
            continue to hold practices and games, even recently, and after residents have complained multiple times</strong>

          </li>
          <li>
            There are only two parking spots for the entire park, so <strong>sports team parents park on the basketball court, and have caused parking
            issues for the immediate neighbors</strong>
          </li>
          <li>
            According to public records, <strong>one La Habra area soccer team has been applying for a permit to use the field at Osornio Park for several years
            and has been denied every year. These records appear to show that the City has little interest in issuing a permit to any other team besides the Pumas</strong>
            
            <ImageContainer src="IMG_20191212_154715.jpg" caption='Sign stating "Soccer Field by Permit Only" with a phone number to call, but La Habra apparently has no intention of letting other teams besides the Pumas play at Osornio Park'/>

          </li> 
          <li>
            <strong>One of the members of the <a href="https://www.lahabracity.com/341/Community-Services-Commission" target="_blank">La Habra Community Services Commission</a> --
            the commission responsible for issuing field permits -- is married
            to the Pumas Vice President</strong>. According to a document
            titled <a href="https://www.lahabracity.com/DocumentCenter/View/6192/The-Job-of-the-Community-Services-Commission?bidId=" target="_blank">The Job of the Community Services Commission</a>, <em>"A
            Community Services Commissioner is an individual who can serve the long-range interests of the La Habra community, who is unbound by election promises, political expediency, or narrow
            interests"</em>, <strong className="alarming">but it's hard to see how this person can be truly objective about who else gets to play at Osornio Park considering their level of involvement with the Pumas</strong>
          </li>

          <li>
            <strong>For some reason, the signs that say "No Animals in Park" point to <a href="http://qcode.us/codes/lahabra/view.php?topic=6-6_04-6_04_150&frames=on" title="Link to La Habra Municipal Code 6.04.150" target="_blank">La Habra Municipal Code 6.04.150</a></strong>,
            which states <em>"Quarantine" means isolation of a dog or other animal in an enclosure or other environment so that the dog or animal cannot be subject to other animals
            or unauthorized persons. (Ord. 1627 § 1, 2003)</em>
          </li>
          
          <li>
            Some neighbors are reporting that <strong>the portable lights that are brought in by the City for games and practices are sometimes left on
            until after 11 at night, and that they have had to go and turn them off themselves</strong>, even though the hours of operation for the park
            are "...Monday through Friday 8:00 a.m. to dusk, Saturday and Sundays 9:00 a.m. to dusk."
            <FootnoteLink name="sports-affiliate-policy-page-27"/>
          </li>
          <li>
            During a meeting of the City Council on October 1, 2018,
            a resolution was passed allowing "certain City parks to be posted for access by dogs on leash". Osornio Park, as well as nearby La Bonita Park, were excluded,
            and the reason given was <strong>"due to active youth sports"</strong>, which is vague and does not specify <strong>why dogs on leashes
            are not allowed at the park when it is not in use by active youth sports<FootnoteLink name="city-council-minutes-page-4"/></strong>
            
          </li>
          <li>
            <strong>Since at least 2014, the City of La Habra has been talking about a dog park at Vista Grande Park.<FootnoteLink name="city-council-minutes-page-5"/></strong> But
            Vista Grande Park <a href="https://www.google.com/maps/place/Vista+Grande+Park/@33.9228485,-117.9600172,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd2ac57cc350cd:0x60c9cd3b90e08d70!8m2!3d33.9228441!4d-117.9578285" target="_blank">(Google Maps)</a>, a former waste landfill<FootnoteLink name="planning-commission-report"/>, {/*that the City wants to develop into more sports facilities. */}
            is at least 2 miles from Osornio Park and its surrounding residents.
            And close-by La Bonita Park <a href="https://www.google.com/maps/place/La+Bonita+Park/@33.937307,-117.9640657,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d52dde790b0b:0xa224518a83c83eda!8m2!3d33.937307!4d-117.961877" target="_blank">(Google Maps)</a> is
            also not dog-friendly. <strong>What we need is a dog-friendly option for Osornio Park that does not require a 2-mile drive to another part of La Habra</strong> 
            <ImageContainer src="vista-grande-plans.jpg" caption="Proposed dog park at Vista Grande Park, circled in red"/>
          </li>
          <li>
            <strong>The proposed dog park at Vista Grande is not much larger than a basketball court<FootnoteLink name="vista-grande-park-plans"/></strong>
          </li>
          <li>
            Community Outreach Meetings were held in the summer of 2019 to gather input into how State of California grant funds could be used to improve certain parks,
            including Osornio Park.
            <ImageContainer src="IMG_20190715_114402.jpg" caption='"City of La Habra Community Outreach for New Park Improvements" flyer, June, 2019'/> If
            grant money is awarded, Osornio Park could get improvements geared towards the community. 
            <strong> But the La Habra Pumas also had a representative at this meeting, showing that if the community remains
            silent, youth sports will continue to control how our local parks are utilized and developed, and who gets to access them</strong>
          </li>

          <li>
            <strong>The Pumas repeatedly play unauthorized games and hold unauthorized practices, even recently,</strong> on dates when
            the <a href="http://www.lahabracity.com/DocumentCenter/View/9984/City-of-La-Habra-Sport-Affiliate-Policy-PDF" target="_blank">City of La Habra Sports Affiliate Policy</a> says
            Osornio Park is closed for the season:
            <ul>
              
              <li>
                There is a <a href="https://www.facebook.com/2298324260383506/videos/550781629096486/" target="_blank">video posted on the Pumas La Habra Facebook page</a> that shows a practice being held, and portable lighting in the background. The video
                is dated December 6, 2019
                <ImageContainer src="pumas-video-december-6.jpg" caption="Video of practice by the La Habra Pumas at Osornio Park, December 6, 2019"/>

              </li>
              <li>
                On December 12, 2019, there was a youth soccer team practice in the evening, using City portable lights. But the City's Recreation Department
                says they don't know who used the park that night
                <ImageContainer src="IMG_20191212_181502.jpg" caption="Night practice by soccer team at Osornio Park, December 12, 2019"/>
              </li>
            </ul>
          </li>
          
        </ul>

        {/* <ImageContainer src="IMG_20190128_133052.jpg" caption="Osornio Park locked and closed to the public"/> */}

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
        
        <p><strong><a rel="nofollow" href="https://www.change.org/p/return-osornio-park-to-the-community" target="_blank">Or sign the petition on change.org</a></strong></p>
      </article>

      <article>
        <h2>How to Get Involved</h2>
        <ul>
          <li>
            There are several reviews by residents on <a target="_blank" href="https://www.google.com/maps/place/Osornio+Park/@33.945514,-117.9657207,15z/data=!4m5!3m4!1s0x0:0x953ec5839822663e!8m2!3d33.945514!4d-117.9657207">the Osornio Park listing on Google Maps</a> that
            talk about these issues. There is also <a target="_blank" href="https://www.google.com/maps/contrib/106685374889606612264/place/ChIJiUdSICTVwoARPmYimIPFPpU/@33.945514,-117.9679094,16z/data=!4m6!1m5!8m4!1e1!2s106685374889606612264!3m1!1e1?hl=en-US">a review by the V.P. of the La Habra Pumas soccer team, where he blames
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
          <li id="hacienda-school">
            <a target="_blank" href="https://www.cde.ca.gov/schooldirectory/details?cdscode=19647666020143">Hacienda School</a> -
            California School Directory - 
            California Dept. of Education
          </li>
          <li id="la-times-article">
            <a target="_blank" href="https://www.latimes.com/archives/la-xpm-2001-may-02-me-58275-story.html">"La Habra to Rename Park After Officer"</a> - Los Angeles Times - May 2, 2001
          </li>
          <li id="opening-ceremony">
            <a target="_blank" href="https://www.flickr.com/photos/calsouthsoccerfoundation/6646253811/in/photostream/">Osornio Park Opening Ceremony 38</a> - Cal South Youth Soccer Foundation
          </li>
          <li id="park-grants">
            <a target="_blank" href="https://www.parksforcalifornia.org/grants">Grants</a> - Parks for All Californians 
          </li>

          <li id="sports-affiliate-policy-page-27">
            <a href="http://www.lahabracity.com/DocumentCenter/View/9984/City-of-La-Habra-Sport-Affiliate-Policy-PDF" target="_blank">City of La Habra Sports Affiliate Policy</a>, page 27
          </li>
          <li id="city-council-minutes-page-4">
            October 1, 2018 <a href="http://www.lahabracity.com/AgendaCenter/ViewFile/Minutes/_10012018-1004" target="_blank">La Habra City Council Minutes</a>, page 4
          </li>
          <li id="city-council-minutes-page-5">
            March 3, 2014 <a href="https://www.lahabracity.com/AgendaCenter/ViewFile/Minutes/_03032014-17" target="_blank">La Habra City Council Minutes</a>, page 5
          </li>
          <li id="planning-commission-report">
            August 1, 2019 <a href="https://www.lahabracity.com/DocumentCenter/View/9519/Vista-Grande-Park---SR" target="_blank">La Habra Planning Commission Agenda Report</a>, page 3
          </li>
          <li id="vista-grande-park-plans">
            <a href="https://www.lahabracity.com/DocumentCenter/View/9515/Vista-Grande-Park-Att-3---Project-Plans" target="_blank">Vista Grande Public Plans</a>, an attachment
            to the <a href="https://www.lahabracity.com/DocumentCenter/View/9519/Vista-Grande-Park---SR" target="_blank">Planning Commission Agenda Report</a>, August 1, 2019
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


