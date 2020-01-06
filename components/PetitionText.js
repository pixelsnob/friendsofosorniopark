
import { Fragment } from 'react';

export default () => (
  <Fragment>
    <style jsx>{`
      .intro {
        text-align: center;
      }
    `}</style>
    <p className="intro">We, the undersigned, request the following:</p>
    <ol>
      <li>
        <strong>That the City of La Habra allow leashed dogs at Osornio Park</strong> when there are no active and scheduled youth sports activities or other City-approved special events, as long as they are in compliance with other city rules about dogs
      </li>
      <li>
        <strong>That the City of La Habra hold sports teams that use Osornio Park more accountable.</strong> This includes:
        <ol type="a">
          <li>Making sure they follow the rules set out in their agreements</li>
          <li>Making sure they practice and play only during approved times</li>
          <li>Reminding them to please not leave trash after games, to not hang banners, and to respect parking rules at or around Osornio Park</li>
          <li>Reminding them not to approach citizens to tell them what they can or cannot do in a public park</li>
          <li>Making sure they don't have the ability to lock citizens out of a public park</li>
        </ol>
      </li>
      <li><strong>That the City of La Habra take the community into account when making changes and improvements to Osornio Park</strong></li>
    </ol>
  </Fragment>
)