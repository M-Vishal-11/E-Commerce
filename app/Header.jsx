function SearchBar() {
  "use Client";
  return (
    <div className="Search-box mt-5">
      <input type="text" className="Search" placeholder="Search" />
      <button className="Search-button">Search</button>
    </div>
  );
}

function Header() {
  return (
    <div className="mb-28">
      <div className="Head-top">
        <nav>
          <ul>
            <li>
              <a href="">Cart</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </nav>
      </div>
      <SearchBar />
    </div>
  );
}
export default Header;
