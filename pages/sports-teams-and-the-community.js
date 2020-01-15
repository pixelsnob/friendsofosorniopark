
import Layout from '../components/Layout';
import ImageContainer from '../components/ImageContainer';
  
export default () => (
  <Layout>

    <article>

      <h2>Sports Teams and the Community</h2>

      <p>
        The City of La Habra requires its youth sports affiliates to abide by certain rules described in
        the <a href="http://www.lahabracity.com/DocumentCenter/View/9984/City-of-La-Habra-Sport-Affiliate-Policy-PDF" target="_blank">City of La Habra Sports Affiliate Policy</a>.
        Several parts of this document remind sports teams to be respectful of neighbors, and to develop and maintain a good relationship with the community.
        
      </p>

      <p>Some examples:</p>
      <ul>
        <li>
          <p><strong>Purpose of Policy</strong>, page 4, paragraph 1:</p>
          <blockquote>
          The City of La Habra and La Habra City School District welcomes the use of City and District
          facilities by local youth sports organization and is interested in maintaining strong relationships
          with these organizations. Our intent is to create a policy that takes into account the needs of the
          Affiliate organizations, and the needs of the community, while minimizing the impact on the
          neighbors surrounding the various park sites. <strong>We expect that each affiliate will always be respectful
          to the neighbors, staff, and community as a whole.</strong>
          </blockquote>
        </li>
        <li>
          <p><strong>Purpose of Policy</strong>, page 4, paragraph 4:</p>
          <blockquote>
            It is important to note that this Sport Affiliate Policy serves as the guide to manage affiliate groups
            using facilities for organized programming. However, <strong>each facility is a public park or school and
            this guide does not extend into the public use of those areas when groups are not using the facility.</strong> 
          </blockquote>
        </li>
        <li>
          <p>And from <strong>General Sport Park Facility Use Guidelines</strong>, page 12, paragraph 1:</p>
          <blockquote>
            The City is supportive of the activities scheduled by La Habra youth sports based groups;
            however, <strong>it must also be sensitive to the neighbors who live around the facilities and be
            respectful of their privacy.</strong>
          </blockquote>
        </li>
      </ul>

      <p>
        But several incidents over the years have shown that the Pumas fail to live up to these expectations. Examples:
      </p>
      
      <ul>
        <li>
          <strong>The Pumas president has kicked out community members himself, threatening the City on them for bringing dogs to Osornio Park</strong>
        </li>
        <li>
        <strong>
          The Pumas president has voiced his anti-dog stance
          on <a target="_blank" href="https://www.google.com/maps/contrib/106685374889606612264/place/ChIJiUdSICTVwoARPmYimIPFPpU/@33.945514,-117.9679094,16z/data=!4m6!1m5!8m4!1e1!2s106685374889606612264!3m1!1e1?hl=en-US">his review of Osornio Park on Google Maps, where he blames "dog owners" for
          not picking up after themselves</a></strong> 
        </li>
        <li>
          <strong>The Pumas repeatedly play unauthorized games and hold unauthorized practices, even recently,</strong> on dates when
          the <a href="http://www.lahabracity.com/DocumentCenter/View/9984/City-of-La-Habra-Sport-Affiliate-Policy-PDF" target="_blank">City of La Habra Sports Affiliate Policy</a> says
          Osornio Park is closed for the season:
          <ul>
            
            <li>
              There is a <a href="https://www.facebook.com/2298324260383506/videos/550781629096486/" target="_blank">video posted on the Puma's La Habra Facebook page</a> that shows a practice being held, and portable lighting in the background. The video
              is dated December 6, 2019
              <ImageContainer src={require('../images/pumas-video-december-6.jpg')} alt="Video of practice by the La Habra at Osornio Park, December 6, 2019, La Habra, California"/>

            </li>
            <li>
              On December 12, 2019, there was a youth soccer team practice in the evening, using City portable lights. But the City's Recreation Department
              says they don't know who used the park that night
              <ImageContainer src={require('../images/IMG_20191212_181502.jpg')} alt="Night practice by soccer team at Osornio Park, December 12, 2019, La Habra, California"/>
            </li>
          </ul>

        </li>
        
        {/* <li>
          Pumas parents and staff park on the basketball courts
          <ImageContainer src={require('../images/PSX_20191026_203307.jpg')} alt="Soccer team parents parking on the basketball courts at Osornio Park, La Habra, California"/>

        </li> */}
      </ul>

    </article>
    
    <style jsx>{`
      
    `}</style>
  </Layout>
);


