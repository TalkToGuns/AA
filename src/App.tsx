import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { AccountPage } from './pages/AccountPage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { ProductsPage } from './pages/ProductsPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/e-liquids" element={<ProductsPage category="e-liquids" />} />
            <Route path="/devices" element={<ProductsPage category="devices" />} />
            <Route path="/accessories" element={<ProductsPage category="accessories" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}