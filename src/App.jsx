import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from "./Context/AuthContext";
import { CartProvider } from './Context/CartContext';
import Header from "./Components/Header";
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetails';
import Cart from './Components/Cart';
import Login from "./Components/Login";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className="app">
            <Header />
            <main className="main-content">
              <div className="container">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
                  <Route path="/category/:category" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
                  <Route path="/product/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
                  <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </main>
            <footer className="footer">
              <div className="container">
                <p>&copy; {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;