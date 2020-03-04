
import Layout from '../components/Layout';
import FloatedImageContainer from '../components/FloatedImageContainer';
import FootnoteLink from '../components/FootnoteLink';
import Head from '../components/Head';
import Link from 'next/link';

const summary = 'Friends of Osornio Park is a group of residents with a common goal: to help make Osornio Park a more welcoming place for the entire community. We are not affiliated with the City of La Habra.';
const affiliatePolicyLink = 
  <a href="http://www.lahabracity.com/DocumentCenter/View/9984/City-of-La-Habra-Sport-Affiliate-Policy-PDF" target="_blank">
    City of La Habra Sports Affiliate Policy
  </a>
;

export default () => (
  <Layout showBackToTopLink={true}>
    <Head>
      <meta name="description" content={summary}/>
    </Head>
    <p>{summary}</p>
    <FloatedImageContainer src="IMG_0136.jpg" caption="Osornio Park in 2010"/>

    <div className="articles">
      <article>
        <h2>About Osornio Park</h2>
        <p>
          Osornio Park is a public park about a half mile north of Whittier Blvd on Hacienda Road in
          La Habra, California <a href="https://www.google.com/maps/place/Osornio+Park/@33.9455184,-117.9679094,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d52420524789:0x953ec5839822663e!8m2!3d33.945514!4d-117.9657207" target="_blank">(Google Maps)</a>. The park
          used to be the playground and sports field for Hacienda School, until the school closed in 1989<FootnoteLink href="hacienda-school" name="Hacienda School footnote"/>.
        </p>

        <p>
          In 2001, the City of La Habra dedicated the park to Michael Osornio, who was killed by a drunk driver while on duty in 1994<FootnoteLink href="la-times-article" name="Osornio Park Renaming, May 2, 2001 Los Angeles Times article footnote"/>.
          The park remained basically untouched, and looked like the schoolyard that it once was until about 2010. It was enjoyed by residents,
          who would gather in the only open space in this area not already taken up by sports facilities, schools, or businesses.
        </p>
        <FloatedImageContainer src="IMG_20191105_151138.jpg" caption="Memorial for Michael A. Osornio at Osornio Park"/>

        <p>
          In 2012, the City of La Habra decided to dedicate the park to the Pumas, a City-affiliated youth soccer team<FootnoteLink href="opening-ceremony" name="Osornio Park Pumas opening ceremony footnote"/>. The Pumas were awarded
          around $100,000 in state parks funds<FootnoteLink href="park-grants" name="California park grants foornote"/>, which they used to convert Osornio Park into a soccer facility. Trees were removed, as well
          as a walking trail and exercise equipment that residents would use. Fences and locking gates were added, as well as "No Animals in Park"
          signs.
        </p>

      </article>

      <article>
        <h2>Park Issues</h2>
        <ul>
          {/* <li>
            <strong>Since 2011, people visiting the park with dogs have been approached by non-City officials threatening that the City of La Habra
            will cite them -- even when the park wasn't in use by anyone at all</strong>
          </li> */}
          <li>
            <strong>The park gets closed every winter for maintenance, and is sometimes completely locked so that the public can't access it, but sports teams
            continue to hold practices and games, even recently, and after residents have complained multiple times</strong>
            <FloatedImageContainer src={'IMG_20190128_133052.jpg'} caption='Osornio Park locked and closed to the public'/>
            
          </li>
          <li>
            There are only two parking spots for the entire park, so <strong>sports team parents park on the basketball court, and have caused parking
            issues for the immediate neighbors</strong>. The signs in the adjacent parking lot &mdash; which is actually in the City of La Habra Heights
            &mdash; <strong>clearly say that parking is for the preschool and school district next door, but sports teams park there anyway</strong>
            <FloatedImageContainer src="PSX_20191026_203307.jpg" caption="Sports team parents parking wherever they like, 2019"/>

            {/* cite??? */}
            
          </li>
          <li>
            Some neighbors are reporting that <strong>the portable lights that are brought in by the City for games and practices are sometimes left on
            until after 11 at night, and that they have had to go and turn them off themselves</strong>, even though the hours of operation for the park
            are "...Monday through Friday 8:00 a.m. to dusk, Saturday and Sundays 9:00 a.m. to dusk."
            <FootnoteLink href="sports-affiliate-policy-page-27" name="Sports affiliate policy, p. 27 footnote"/>

            <FloatedImageContainer src="IMG_20191212_181502.jpg" caption="Night practice by soccer team at Osornio Park, December 12, 2019, with City-provided portable lights, even though the park was supposedly closed for maintenance"/>

          </li>
          <li>
            According to public records, <strong>one La Habra area soccer team has been applying for a permit to use the field at Osornio Park for several years
            and has been denied every year. These records appear to show that the City has little interest in issuing a permit to any other team besides the Pumas</strong>
            
            <FloatedImageContainer src="IMG_20191212_154715.jpg" caption='Sign stating "Soccer Field by Permit Only" with a phone number to call, but La Habra apparently has no intention of letting other teams besides the Pumas play at Osornio Park'/>

          </li> 
          <li>
            <strong>One of the members of the <a href="https://www.lahabracity.com/341/Community-Services-Commission" target="_blank">La Habra Community Services Commission</a> &mdash;
            the commission responsible for issuing field permits &mdash; is married
            to the Pumas Vice President</strong>. According to a document
            titled <a href="https://www.lahabracity.com/DocumentCenter/View/6192/The-Job-of-the-Community-Services-Commission?bidId=" target="_blank">The Job of the Community Services Commission</a>, "A
            Community Services Commissioner is an individual who can serve the long-range interests of the La Habra community, who is unbound by election promises, political expediency, or narrow
            interests", <strong className="alarming">but it's hard to see how someone this involved with the only soccer team allowed to play at Osornio Park can make objective and impartial decisions about Osornio Park</strong>
          </li>

          <li>
            <strong>For some reason, the signs that say "No Animals in Park" point to <a href="http://qcode.us/codes/lahabra/view.php?topic=6-6_04-6_04_150&frames=on" title="Link to La Habra Municipal Code 6.04.150" target="_blank">La Habra Municipal Code 6.04.150</a></strong>,
            which states "Quarantine means isolation of a dog or other animal in an enclosure or other environment so that the dog or animal cannot be subject to other animals
            or unauthorized persons. (Ord. 1627 § 1, 2003)"
            <FloatedImageContainer src={'IMG_20191012_145954.jpg'} caption='"No Animals in Park" sign at Osornio Park'/>
          </li>
          
          <li>
            During a meeting of the City Council on October 1, 2018,
            a resolution was passed allowing "certain City parks to be posted for access by dogs on leash". Osornio Park, as well as nearby La Bonita Park, were excluded,
            and the reason given was <strong>"due to active youth sports"</strong>, which is vague and does not specify <strong>why dogs on leashes
            are not allowed at the park when it is not in use by active youth sports<FootnoteLink href="city-council-minutes-page-4" name="October 1, 2018 La Habra City Council minutes, p. 4 footnote"/></strong>
            <FloatedImageContainer src="IMG_20191012_145835.jpg" caption="Osornio Park: the least friendly park in Southern California"/>
          </li>
          <li>
            <strong>Since at least 2014, the City of La Habra has been talking about a dog park at Vista Grande Park.<FootnoteLink href="city-council-minutes-page-5" name="March 3, 2014 La Habra City Council minutes, p. 5 footnote"/></strong> But
            Vista Grande Park <a href="https://www.google.com/maps/place/Vista+Grande+Park/@33.9228485,-117.9600172,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd2ac57cc350cd:0x60c9cd3b90e08d70!8m2!3d33.9228441!4d-117.9578285" target="_blank">(Google Maps)</a>, a former waste landfill<FootnoteLink href="planning-commission-report" name="August 1, 2019 La Habra Planning Commission Agenda Report, p.3 footnote"/>, {/*that the City wants to develop into more sports facilities. */}
            is at least 2 miles from Osornio Park and its surrounding residents.
            And close-by La Bonita Park <a href="https://www.google.com/maps/place/La+Bonita+Park/@33.937307,-117.9640657,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2d52dde790b0b:0xa224518a83c83eda!8m2!3d33.937307!4d-117.961877" target="_blank">(Google Maps)</a> is
            also not dog-friendly. <strong>What we need is a dog-friendly option for Osornio Park that does not require a 2-mile drive to another part of La Habra</strong> 
          </li>
          <li>
            <strong>The proposed dog park at Vista Grande is not much larger than a basketball court<FootnoteLink href="vista-grande-park-plans" name="August 1, 2019 Vista Grande Public Plans footnote"/></strong>
            <FloatedImageContainer src="vista-grande-plans.jpg" caption="Proposed dog park at Vista Grande Park, circled in red"/>

          </li>
          <li>
            Community Outreach Meetings were held in the summer of 2019 to gather input into how State of California grant funds could be used to improve certain parks,
            including Osornio Park.
            <FloatedImageContainer src="IMG_20190715_114402.jpg" caption='"City of La Habra Community Outreach for New Park Improvements" flyer, June, 2019'/> If
            grant money is awarded, Osornio Park could get improvements geared towards the community. <strong className="alarming">But a dog run idea suggested by multiple residents did not make it into the final grant application</strong>
            <FloatedImageContainer src="osornio-improvements-final.jpg" caption="Ideas submitted to the City of La Habra at the Community Outreach Meeting in June, 2019 on behalf of the local neighborhood"/>

            <FloatedImageContainer src="prop-68-ideas-text.jpg" caption="The soccer-biased ideas that were actually submitted in the grant application to the State of California by the City of La Habra. No mention of a dog run, even though it was suggested by multiple residents"/>
          </li>

          <li>
            <strong>The Pumas repeatedly play unauthorized games and hold unauthorized practices, even recently,</strong> on dates when
            the <a href="http://www.lahabracity.com/DocumentCenter/View/9984/City-of-La-Habra-Sport-Affiliate-Policy-PDF" target="_blank">City of La Habra Sports Affiliate Policy</a> says
            Osornio Park is closed for the season:
            <ul>
              
              <li>
                There is a <a href="https://www.facebook.com/2298324260383506/videos/550781629096486/" target="_blank">video posted on the Pumas La Habra Facebook page</a> that shows a practice being held, and portable lighting in the background. The video
                is dated December 6, 2019
                {/* <ImageContainer src="pumas-video-december-6.jpg" caption="Video of practice by the La Habra Pumas at Osornio Park, December 6, 2019, even though the park was closed for maintenance"/> */}

              </li>
              <li>
                On December 12, 2019, there was a youth soccer team practice in the evening, using City portable lights. But the City's Recreation Department
                says they don't know who used the park that night
                {/** mention public records request */}
              </li>
            </ul>
          </li>

          <li>
            In the section titled "Purpose of Policy" of the {affiliatePolicyLink}, it states
            "we expect that each affiliate will always be respectful to the neighbors, staff, and community as a whole". It also lists values
            affiliates are expected to abide by, including "actively engaging and collaborating with local resources ensuring that we are
            contributing to the health of the community" and "promoting the community’s interest as our highest priority". The Pumas, instead of
            working with the community, <strong>choose to take the forceful approach, using the power of city government to implement policies that
            promote their own interests, and ignoring the needs of the neighboring community:</strong>
            <ul>
              <li>
                When there was reportedly an issue about animal waste in the park, instead of working with the community, <strong>the Pumas decided to take matters into their
                own hands by approaching citizens to tell them that dogs were not allowed at Osornio Park and that the City would ticket them, even though residents have been taking their dogs here for
                years with no problems</strong>
              </li>
              <li>
                After residents complained to the City, and wrote reviews on Google Maps about the park being taken over, <a target="_blank" href="https://www.google.com/maps/contrib/106685374889606612264/place/ChIJiUdSICTVwoARPmYimIPFPpU/@33.945514,-117.9679094,16z/data=!4m6!1m5!8m4!1e1!2s106685374889606612264!3m1!1e1?hl=en-US">the V.P. of the Pumas wrote a review of his own</a>,
                blaming dog owners for not picking up after their dogs, and admitting that <strong>he was the one who pushed for "No Animals in Park" to be
                installed when the park was converted to a soccer field</strong>
              </li>
              <li>Similarly, sports teams did not like that someone was playing golf, so they had "No Golf" signs put up by the City</li>
              <li>
                When the Pumas secured a State Parks grant for improvements to Osornio Park, <strong>they made all of the improvements for the purposes of
                soccer, but removed an exercise trail residents used to use, and started locking the park to keep other teams out. There was no effort spent on making the park
                better for the community, and no effort made to include residents in any of their plans</strong>
                {/* drone shots */}
              </li>
              <li>
                The Pumas have an adult organization that uses Osornio Park<FootnoteLink href="pumas-adult-team" name="Pumas adult team footnote"/>, even though <strong>the sports affiliate program is supposed to be for youth sports, and other
                teams have been denied permits to play at Osornio Park because they had adult teams</strong>
              </li>
              <li>
                The Pumas had a competitive adult team called the "Morningstar Pumas"<FootnoteLink href="morningstar-pumas" name="Morningstar pumas footnote"/>, <strong>apparently made up of members
                of <a href="https://morningstarcc.org/" target="_blank">Morningstar Church</a> in neighboring City of Whittier</strong>
              </li>
            </ul>
          </li>
          
          <li>
            <strong>There is confusion about what Osornio Park is to the public.</strong> Some petition signers thought that
            Osornio Park was a private space, and that it was owned by one person who rents the space out to other teams. To make matters worse,
            the City of La Habra and others like to refer to Osornio Park as a "sports park", but <strong>the term "sports park" has no special meaning</strong>, even
            though it falsely seems to imply that the City's sports teams have priority over the public when it comes to who can access and use a public space
            
            {/** Cite? */}
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

        <p><Link href="/petition"><a>Read the full petition here</a></Link></p>
        <p>
          If you would like to add your hand-written signature to this petition, please email <a href="mailto:petition@friendsofosorniopark.org">petition@friendsofosorniopark.org</a>
        </p>
        
        <p><strong><a rel="nofollow" href="https://www.change.org/p/return-osornio-park-to-the-community" target="_blank">Or sign the petition on change.org</a></strong></p>
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
            {affiliatePolicyLink}, page 27
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
          <li id="pumas-adult-team">
            <a href="https://www.socalpremier.org/page/show/5338552-pumas-la-habra" target="_blank">So Cal Premier Adult Soccer League</a>, Puma's Men's Team 2020 Schedule
          </li>
          <li id="morningstar-pumas">
            <a href="http://elements.demosphere.com/72238/teams/86549114/72019703-86549156/TEAM.html" target="_blank">So Cal Premier Adult Soccer League</a>, "Morningstar Pumas" 2016-2017 Schedule
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


