import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Roulez avec <span className="text-yellow-500">Toufik car</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Découvrez votre voiture idéale avec Toufik car
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/catalogue"
              className="inline-flex items-center px-8 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-400 transition-colors"
            >
              Voir les voitures
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}