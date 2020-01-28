
export default () => (
  <nav className="noprint">
    <ul>
      <li><a rel="prefetch" href="/issues">Osornio Park Issues</a></li>
      <li><a rel="prefetch" href="/sports-teams-and-the-community">Sports Teams and the Community</a></li>
      <li><a rel="prefetch" href="/petition">Osornio Park Petition</a></li>
      <li><a rel="nofollow" className="loud" target="_blank" href="https://www.change.org/p/return-osornio-park-to-the-community">Sign the Petition on change.org</a></li>

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
      }
      a:link, a:visited, a:active, a:hover {
        text-decoration: none;
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
        }
        a:link, a:visited, a:active, a:hover {
          font-size: 1.2rem;
        }
      }
    `}</style>
  </nav>
)