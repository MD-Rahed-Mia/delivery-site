import './Navbar.css';


export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo-container">
            <h1 className="logo">Carryfast.express</h1>
        </div>
        <div className="menu-container">
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Contacts</li>
                <li>About</li>
                <li>Sign In</li>
                <li><button className='default-btn'>Connect us</button></li>
            </ul>
        </div>
      </nav>
    </>
  );
}
