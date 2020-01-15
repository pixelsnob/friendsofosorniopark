
export default () => (
  <nav>
    <ul>
      <li><a href="/issues">Osornio Park Issues</a></li>
      <li><a href="/sports-teams-and-the-community">Sports Teams and the Community</a></li>
      <li><a href="/petition">Osornio Park Petition</a></li>

    </ul>
    <style jsx>{`
      ul {
        margin: 0 0 40px 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        border-top: 3px solid #ddd;
        border-bottom: 3px solid #ddd;
      }
      li {
        list-style-type: none;
        padding: 0;
        margin: 0;
        line-height: 2;
      }
      a {
        text-decoration: none;
      }
      @media screen and (max-width: 768px) {
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