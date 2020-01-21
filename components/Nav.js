
export default () => (
  <nav>
    <ul>
      <li><a href="/issues">Osornio Park Issues</a></li>
      <li><a href="/sports-teams-and-the-community">Sports Teams and the Community</a></li>
      <li><a href="/petition">Osornio Park Petition</a></li>
      <li><a className="loud" target="_blank" href="https://www.change.org/p/return-osornio-park-to-the-community">Sign the Petition on change.org</a></li>

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
      a {
        text-decoration: none;
        white-space: nowrap;
        font-size: 1rem;
      }
      @media screen and (max-width: 992px) {
        ul {
          display: block;
        }
        li {
          text-align: center;
        }
      }
    `}</style>
  </nav>
)