import Book from "./icons/Book";

const Header = () => {
  return (
    <>
      <header >
        <h1>
          English App <Book width="44" heigth="44" />
        </h1>
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Unist</a>
            </li>
            <li>
              <a href="#">videos</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
