import { useState } from 'react';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import ReservationModal from '../components/ReservationModal';
import { Car } from '../types';
import { Filter } from 'lucide-react';

export default function Catalogue() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filters, setFilters] = useState({
    transmission: '',
    fuel: '',
    priceRange: ''
  });

  const filteredCars = cars.filter(car => {
    if (filters.transmission && !car.features.some(f => 
      f.toLowerCase().includes(filters.transmission.toLowerCase()))) {
      return false;
    }
    if (filters.fuel && !car.features.some(f => 
      f.toLowerCase().includes(filters.fuel.toLowerCase()))) {
      return false;
    }
    if (filters.priceRange) {
      const price = parseInt(car.price);
      switch (filters.priceRange) {
        case 'low':
          return price <= 400;
        case 'medium':
          return price > 400 && price <= 700;
        case 'high':
          return price > 700;
        default:
          return true;
      }
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-4xl font-bold mb-6 md:mb-0">
            Notre <span className="text-yellow-500">catalogue</span>
          </h1>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={filters.transmission}
              onChange={(e) => setFilters(f => ({ ...f, transmission: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="">Transmission</option>
              <option value="manuelle">Manuelle</option>
              <option value="automatique">Automatique</option>
            </select>

            <select
              value={filters.fuel}
              onChange={(e) => setFilters(f => ({ ...f, fuel: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="">Carburant</option>
              <option value="essence">Essence</option>
              <option value="diesel">Diesel</option>
            </select>

            <select
              value={filters.priceRange}
              onChange={(e) => setFilters(f => ({ ...f, priceRange: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="">Prix</option>
              <option value="low">≤ 400 DH/jour</option>
              <option value="medium">401-700 DH/jour</option>
              <option value="high">Plus de 700 DH/jour</option>
            </select>
          </div>
        </div>

        {filteredCars.length === 0 ? (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">
              Aucune voiture ne correspond à vos critères
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => (
              <CarCard
                key={car.id}
                car={car}
                onReserve={setSelectedCar}
              />
            ))}
          </div>
        )}
      </div>

      {selectedCar && (
        <ReservationModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
}