import { useEffect, useState } from "react";
import "./Navbar.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(event) {
    setSearchValue(event.target.value);

    console.log(searchValue);
  }

  useEffect(() => {
    handleSearch(event);
  }, [searchValue]);

  return (
    <>
      <div className="search">
        <input type="text" placeholder="search..." onChange={handleSearch} />
      </div>
    </>
  );
};

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo-container">
          <h1 className="logo">Carryfast.express</h1>
        </div>

        <div className="search-container">
          <Search />
        </div>
        <div className="menu-container">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Contacts</li>
            <li>About</li>
            <li>Sign In</li>
            <li>
              <button className="default-btn">Connect us</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
