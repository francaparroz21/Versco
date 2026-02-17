import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Refrescate con Jugos Naturales",
    subtitle: "100% frutas frescas y deliciosas",
    img: "/images/juice1.png",
  },
  {
    title: "Energía y Sabor",
    subtitle: "Jugos que te dan un boost saludable",
    img: "/images/juice2.png",
  },
  {
    title: "Sabor Tropical en Cada Sorbo",
    subtitle: "Descubre nuestros jugos exóticos",
    img: "/images/juice3.png",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  // Cambiar slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={process.env.PUBLIC_URL + slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-white mb-6">{slide.subtitle}</p>
            <Link
              to="/shop"
              className="bg-[#8ae083] hover:bg-green-500 text-black font-bold px-6 py-3 rounded-lg transition"
            >
              Comprar Ahora
            </Link>
          </div>
        </div>
      ))}

      {/* Indicadores del carousel */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === current ? "bg-[#8ae083]" : "bg-white"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Home;
