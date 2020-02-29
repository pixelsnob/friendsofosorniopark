
export default () => (
  <nav className="noprint">
    <ul>
      <li><a rel="prefetch" href="/photos">Photos and Screenshots</a></li>

      <li><a rel="prefetch" href="/petition">Petition</a></li>
      <li><a rel="prefetch" href="/contact">Contact</a></li>
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