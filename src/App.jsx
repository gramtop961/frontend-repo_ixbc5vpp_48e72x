import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Modal from './components/Modal';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [productOpen, setProductOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (p) => {
    setSelectedProduct(p);
    setProductOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-zinc-50 text-zinc-900">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <main>
        <Hero onShopNow={() => {
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
        <Products onSelect={handleSelectProduct} />
      </main>

      {/* Auth Modal */}
      <Modal open={authOpen} onClose={() => setAuthOpen(false)} title={authMode === 'login' ? 'Welcome back' : 'Create your account'}>
        <div className="flex items-center gap-2 rounded-lg bg-zinc-100 p-1 w-full">
          <button
            onClick={() => setAuthMode('login')}
            className={`w-1/2 rounded-md py-2 text-sm font-medium ${authMode === 'login' ? 'bg-white shadow border border-black/5' : 'text-zinc-600'}`}
          >
            Login
          </button>
          <button
            onClick={() => setAuthMode('signup')}
            className={`w-1/2 rounded-md py-2 text-sm font-medium ${authMode === 'signup' ? 'bg-white shadow border border-black/5' : 'text-zinc-600'}`}
          >
            Sign up
          </button>
        </div>
        <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
          {authMode === 'signup' && (
            <div>
              <label className="block text-sm font-medium mb-1">Full name</label>
              <input type="text" required className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Jane Doe" />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" required className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" required className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-lg bg-black text-white py-2.5 font-medium hover:bg-zinc-900">
            {authMode === 'login' ? 'Sign in' : 'Create account'}
          </button>
          <p className="text-xs text-zinc-500 text-center">
            By continuing you agree to our Terms and Privacy Policy.
          </p>
        </form>
      </Modal>

      {/* Product Detail Modal */}
      <Modal open={productOpen} onClose={() => setProductOpen(false)} title={selectedProduct?.name}>
        {selectedProduct && (
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="aspect-square overflow-hidden rounded-xl border border-black/10">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-zinc-600">{selectedProduct.description}</p>
              <p className="mt-3 text-2xl font-semibold">${selectedProduct.price}</p>
              {selectedProduct.colors && (
                <div className="mt-4">
                  <p className="text-sm font-medium">Color</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedProduct.colors.map((c) => (
                      <span key={c} className="text-xs px-3 py-1 rounded-full border border-black/10">{c}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-6 flex gap-3">
                <button className="flex-1 rounded-lg bg-black text-white py-2.5 font-medium hover:bg-zinc-900">Add to cart</button>
                <button className="flex-1 rounded-lg border border-black/10 bg-white py-2.5 font-medium hover:bg-zinc-50">Buy now</button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <footer className="mt-16 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-zinc-600">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} HoloShop. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-black">Privacy</a>
              <a href="#" className="hover:text-black">Terms</a>
              <a href="#" className="hover:text-black">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
