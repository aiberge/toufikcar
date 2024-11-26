import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/Toulogo.png" 
                alt="Toufik car" 
                className="h-[190px] w-[190px]"
              />
            </Link>
            <p className="text-gray-400">
              Location de voitures premium pour tous vos besoins
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-500">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="text-gray-400 hover:text-yellow-500">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-500">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+212 661-140298</li>
              <li>contact@toufikcar.ma</li>
              <li>123 Avenue Mohammed V,</li>
              <li>Casablanca, Maroc</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Horaires</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lundi - Vendredi: 8h - 20h</li>
              <li>Samedi: 9h - 18h</li>
              <li>Dimanche: 10h - 16h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Toufik car. Tous droits réservés.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Fait avec</span>
            <Heart className="h-4 w-4 text-yellow-500 mx-1" />
            <span>au Maroc</span>
          </div>
        </div>
      </div>
    </footer>
  );
}