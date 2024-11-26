import { Car } from '../types';
import { Calendar } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onReserve: (car: Car) => void;
}

export default function CarCard({ car, onReserve }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative h-48">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-yellow-500 text-black px-4 py-2 rounded-bl-lg font-semibold">
          {car.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{car.name}</h3>
        <ul className="space-y-2 mb-6">
          {car.features.map((feature, index) => (
            <li key={index} className="text-gray-600 flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <button
          onClick={() => onReserve(car)}
          className="w-full flex items-center justify-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Réserver maintenant
        </button>
      </div>
    </div>
  );
}