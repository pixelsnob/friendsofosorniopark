
import Layout from '../components/Layout';
import ImageContainer from '../components/ImageContainer';
import FootnoteLink from '../components/FootnoteLink';
import Head from '../components/Head';

// const summary = 'Friends of Osornio Park is a group of residents with a common goal: to help make Osornio Park a more welcoming place for the entire community. We are not affiliated with the City of La Habra.';
// const affiliatePolicyLink = 
//   <a href="http://www.lahabracity.com/DocumentCenter/View/9984/City-of-La-Habra-Sport-Affiliate-Policy-PDF" target="_blank">
//     City of La Habra Sports Affiliate Policy
//   </a>
// ;

export default () => (
  <Layout showBackToTopLink={true}>
    <Head>
      <meta name="description" content="Various screenshots and photos related to Osornio Park, and the sports teams that play there"/>
    </Head>
    <div className="articles">
      <article>
        <h2>Photos and Screenshots</h2>
        <ul>
          <li>
            <ImageContainer src="cal-south-screenshot-1.jpg" caption="Screenshot from Cal South Soccer Foundation's Flickr Page showing City Councilmembers, the Pumas V.P., and others at the park re-dedication in 2012"/>
          </li>
          <li>
            <ImageContainer src="NO-DOGS-ALLOWED.jpg" caption={`"NO DOGS ALLOWED" shouted in all-caps in this description of Osornio Park, put up by the V.P. of the Pumas on the Coast Soccer League website`}/>
          </li>
          <li>
            <ImageContainer src="janes-journal-screenshot.jpg" caption={`Screenshot from "La Habra Jane's Journal", March 7, 2012, saying that the city invested $200,000 in the soccer field`}/>
          </li>
          <li>
            <ImageContainer src="osornio-park-fb-page.jpg" caption={`"Unofficial" Facebook page that points to coastsoccer.com, but for some reason shows a La Habra City phone number`}/>
          </li>
          <li>
            <ImageContainer src="socal-premier-pumas.jpg" caption="So Cal Premier Schedule for the Pumas adult team"/>
          </li>
          <li>
            <ImageContainer src="morningstar-pumas-schedule.jpg" caption={`Schedule for the "Morningstar Pumas", a soccer team made up of members of a church in Whittier, CA, and more "no dogs" propaganda`}/>
          </li>
          <li>
            <ImageContainer src="osornio-park-city-website.jpg" caption={`Osornio Park description on the City of La Habra's website. No mention that there are only 2 parking spaces`}/>
          </li>
          <li>
            <ImageContainer src="collies-fb.jpg" caption={`Some of the folks that were kicked out of the park include a dog therapy team that helps brain-injured children`}/>
          </li>
          <li>
            <ImageContainer src="pumas-la-habra-website.jpg" caption={`The description of the Pumas on the La Habra City website states they have teams in U-9 through U-17 divisions, but makes no mention of their adult teams`}/>
          </li>
          <li>
            <ImageContainer src="IMG_1326.jpg" caption={`Entire park was closed for several weeks in 2011 to protect the soccer field, even though the soccer field takes up only half the space of the park`}/>
          </li>
          <li>
            <ImageContainer src="IMG_1455.jpg" caption={`Osornio Park locked and closed to the public in December, 2011`}/>
          </li>
        </ul>
      </article>
    </div>
    
    <style jsx>{`
      ul {
        margin: 0;
        padding: 0;
        width: 100%;
        column-count: 1;
        grid-gap: 40px;
      }
      li {
        list-style-type: none;
        margin: 0;
        width: 100%;
        display: inline-block;
        margin-bottom: 35px;
        padding: 0;
        /*border-bottom: 3px solid #ddd;*/
      }
      @media screen and (min-width: 992px) {
        ul {
          
          column-count: 2;
        }
      }
      @media screen and (min-width: 1400px) {
        ul {
          
          column-count: 3;
        }
      }
      
      
    `}</style>
  </Layout>
);


