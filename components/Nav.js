import Link from 'next/link';

export default () => (
  <nav className="noprint">
    <ul>
      <li><Link href="/photos"><a>Photos and Screenshots</a></Link></li>
      <li><Link href="/events"><a>Upcoming Events</a></Link></li>
      <li><Link href="/petition"><a>Petition</a></Link></li>
      <li><Link href="/contact"><a>Contact</a></Link></li>

    </ul>
    <style jsx>{`
      ul {
        margin: 0 0 40px 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        border-color: #ddd;
        border-width: 3px 0;
        border-style: solid;
      }
      li {
        list-style-type: none;
        padding: 2px;
        margin: 0;
        line-height: 2;
        width: 28%;
        text-align: center;
      }
      a:link, a:visited, a:active, a:hover {
        text-decoration: none;
        text-transform: uppercase;
        white-space: nowrap;
        font-size: 1rem;
      }
      @media screen and (max-width: 992px) {
        ul {
          display: block;
          padding: 6px 0;
        }
        li {
          text-align: center;
          line-height: 1.7;
          width: auto;
        }
        a:link, a:visited, a:active, a:hover {
          font-size: 1.2rem;
        }
      }
    `}</style>
  </nav>
)