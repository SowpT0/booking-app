

import { Link } from 'react-router-dom';
import '../styles.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-orange">
      <Link className="navbar-brand" to="/">PingPong Booking App</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/bookings">Bookings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
