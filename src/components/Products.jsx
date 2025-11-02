import React from 'react';

const products = [
  {
    id: 'p1',
    name: 'Holographic Card Holder',
    price: 39,
    image:
      'https://images.unsplash.com/photo-1617038260897-3c7468e4a7a0?q=80&w=1200&auto=format&fit=crop',
    description:
      'A reflective, iridescent wallet designed for sleek everyday carry with RFID protection.',
    colors: ['Silver', 'Iridescent', 'Charcoal'],
  },
  {
    id: 'p2',
    name: 'Neon Edge Headphones',
    price: 129,
    image:
      'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop',
    description:
      'Wireless over-ear headphones with deep bass, spatial audio, and crystal-clear calls.',
    colors: ['Black', 'White'],
  },
  {
    id: 'p3',
    name: 'Glacier Smart Bottle',
    price: 59,
    image:
      'https://images.unsplash.com/photo-1532634938-ead5b1291d3a?q=80&w=1200&auto=format&fit=crop',
    description:
      'Self-cleaning insulated bottle that keeps drinks at the perfect temperature all day.',
    colors: ['Ice', 'Onyx'],
  },
  {
    id: 'p4',
    name: 'Aurora Desk Lamp',
    price: 89,
    image:
      'https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?q=80&w=1200&auto=format&fit=crop',
    description:
      'Minimal LED lamp with touch dimming and a gentle glow that reduces eye strain.',
    colors: ['Graphite', 'Snow'],
  },
];

const Products = ({ onSelect }) => {
  return (
    <section id="products" className="py-16 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Featured products</h2>
            <p className="text-zinc-600 mt-1">Curated essentials, ready to ship.</p>
          </div>
          <a href="#" className="text-sm font-medium text-zinc-700 hover:text-black">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => onSelect(p)}
              className="group text-left rounded-2xl overflow-hidden bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium tracking-tight line-clamp-1">{p.name}</h3>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-zinc-600">${p.price}</p>
                  <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-700">In stock</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
