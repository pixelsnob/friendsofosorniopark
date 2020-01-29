
import Layout from '../components/Layout';
import ImageContainer from '../components/ImageContainer';
import Head from '../components/Head';

const sportsAffiliatePolicyLink = <a href="http://www.lahabracity.com/DocumentCenter/View/9984/City-of-La-Habra-Sport-Affiliate-Policy-PDF" target="_blank">City of La Habra Sports Affiliate Policy</a>;

export default () => (
  <Layout showBackToTopLink={true}>
    <Head>
      <title>Friends of Osornio Park | Sports Teams and the Community</title>
      <meta name="description" content="Details about sports teams that play at Osornio Park, and how their actions affect the community."/>
    </Head>
    <article>
      <h2>Sports Teams and the Community</h2>

      <p>
        The City of La Habra requires its youth sports affiliates to abide by certain rules described in
        the {sportsAffiliatePolicyLink}. Several parts of this document remind sports teams to be respectful of neighbors, and to develop and maintain a good relationship with the community.
      </p>
      <ul>
        <li>
          <blockquote>
            <p>The City of La Habra and La Habra City School District welcomes the use of City and District
            facilities by local youth sports organization and is interested in maintaining strong relationships
            with these organizations. Our intent is to create a policy that takes into account the needs of the
            Affiliate organizations, and the needs of the community, while minimizing the impact on the
            neighbors surrounding the various park sites. <strong>We expect that each affiliate will always be respectful
            to the neighbors, staff, and community as a whole.</strong></p>
            <footer>{sportsAffiliatePolicyLink}, page 4</footer>
          </blockquote>
        </li>
        <li>
          <blockquote>
            <p>It is important to note that this Sport Affiliate Policy serves as the guide to manage affiliate groups
            using facilities for organized programming. However, <strong>each facility is a public park or school and
            this guide does not extend into the public use of those areas when groups are not using the facility.</strong></p>
            <footer>{sportsAffiliatePolicyLink}, page 4</footer>
          </blockquote>
        </li>
        <li>
          <blockquote>
            <p>The City is supportive of the activities scheduled by La Habra youth sports based groups;
            however, <strong>it must also be sensitive to the neighbors who live around the facilities and be
            respectful of their privacy.</strong></p>
            <footer>{sportsAffiliatePolicyLink}, page 12</footer>
          </blockquote>
        </li>
      </ul>

      <p>
        But several incidents over the years have shown that the Pumas fail to live up to these expectations. Examples:
      </p>
      
      <ul>
        <li>
          <strong>The Pumas president has kicked out park visitors himself, threatening the City on them for bringing dogs to Osornio Park</strong>
        </li>
        <li>
        <strong>
          The Pumas president has voiced his anti-dog stance
          on <a target="_blank" href="https://www.google.com/maps/contrib/106685374889606612264/place/ChIJiUdSICTVwoARPmYimIPFPpU/@33.945514,-117.9679094,16z/data=!4m6!1m5!8m4!1e1!2s106685374889606612264!3m1!1e1?hl=en-US">his review of Osornio Park on Google Maps, where he blames dog owners for
          not picking up after their dogs</a></strong> 
          <ImageContainer src="cal-south-field-screenshot.jpg" caption='"No dogs allowed" repeated twice and in all caps in the Coast Soccer League listing for Osornio Park'/>

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
    </article>
  </Layout>
);


