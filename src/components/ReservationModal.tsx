import { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Car } from '../types';
import { X } from 'lucide-react';

interface ReservationModalProps {
  car: Car;
  onClose: () => void;
}

export default function ReservationModal({ car, onClose }: ReservationModalProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedStartDate = startDate ? format(new Date(startDate), 'dd MMMM yyyy', { locale: fr }) : '';
    const formattedEndDate = endDate ? format(new Date(endDate), 'dd MMMM yyyy', { locale: fr }) : '';
    
    const message = encodeURIComponent(`Bonjour, je souhaite louer une voiture via votre site BENDRIOUCH CAR.

Véhicule : ${car.name}
Dates de location :
- Début : ${formattedStartDate}
- Fin : ${formattedEndDate}

Merci de me confirmer la disponibilité !`);
    
    window.open(`https://wa.me/212661140298?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Réserver {car.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date de début
            </label>
            <input
              type="date"
              required
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date de fin
            </label>
            <input
              type="date"
              required
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate || new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Continuer sur WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}