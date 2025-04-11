import { Link } from 'react-router-dom';
import { useAuth } from "../Context/AuthContext"
import { useCart } from "../Context/CartContext"

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const { itemCount } = useCart();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          ShopEasy
        </Link>
        
        {isAuthenticated ? (
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/cart" className="nav-link cart-link">
              Cart
              {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </Link>
            <button onClick={logout} className="nav-link logout-btn">
              Logout
            </button>
            <span className="welcome-user">Hello, {user?.username}</span>
          </nav>
        ) : (
          <nav className="nav">
            <Link to="/login" className="nav-link">Login</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;