
import Head from 'next/head';

export default props => (  
  <Head>
    <title>Osornio Park, La Habra, California | Friends of Osornio Park</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css?family=Baloo+Bhaijaan%7CMontserrat:400,700&display=swap" rel="stylesheet"></link>
    {props.children}
  </Head> 
)

{/* <meta name="description" content="We are a group of local community members with a common goal: to help make Osornio Park a more welcoming place for the entire community. We are not affiliated with the City of La Habra."></meta> */}
