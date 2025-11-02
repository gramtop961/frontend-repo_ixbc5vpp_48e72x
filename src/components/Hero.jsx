import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = ({ onShopNow }) => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Future-ready commerce for modern lifestyles
          </h1>
          <p className="mt-4 text-lg text-zinc-600 max-w-xl">
            Discover iridescent, tech-forward essentials curated for design lovers. Secure checkout, fast delivery, and a delightful shopping experience.
          </p>
          <div className="mt-8 flex gap-3">
            <button onClick={onShopNow} className="px-5 py-3 rounded-lg bg-black text-white font-medium hover:bg-zinc-900">
              Shop products
            </button>
            <a href="#about" className="px-5 py-3 rounded-lg border border-black/10 bg-white font-medium hover:bg-zinc-50">
              Learn more
            </a>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] rounded-2xl overflow-hidden order-1 lg:order-2">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
