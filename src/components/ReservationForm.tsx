import { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { usePDF } from 'react-to-pdf';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    identityNumber: '',
    fullName: '',
    carModel: '',
    startDate: '',
    endDate: '',
    phoneNumber: ''
  });

  const { toPDF, targetRef } = usePDF({
    filename: `contrat-location-${format(new Date(), 'dd-MM-yyyy')}.pdf`,
    method: 'save',
    page: { margin: 20 }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await toPDF();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return format(new Date(dateString), 'dd MMMM yyyy', { locale: fr });
  };

  const contractNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen pt-24 pb-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PDF Template */}
        <div style={{ position: 'absolute', left: '-9999px' }}>
          <div ref={targetRef} className="p-8 bg-white" style={{ width: '800px' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '2px solid #000', paddingBottom: '20px' }}>
              <img src="/bendrologo.png" alt="Logo" style={{ height: '80px', margin: '0 auto' }} />
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '12px' }}>CONTRAT DE LOCATION N° {contractNumber}</h2>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Date : {format(new Date(), 'dd MMMM yyyy', { locale: fr })}
              </p>
            </div>

            {/* Contract Content */}
            <div style={{ fontSize: '12px', lineHeight: '1.5' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <p style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '14px' }}>LOUEUR</p>
                  <p>BENDRIOUCH CAR</p>
                  <p>Tél: +212 661-140298</p>
                  <p>Email: contact@bendriouchcar.ma</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '14px' }}>LOCATAIRE</p>
                  <p>Nom: {formData.fullName}</p>
                  <p>CIN/Passeport: {formData.identityNumber}</p>
                  <p>Tél: {formData.phoneNumber}</p>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '14px' }}>VÉHICULE ET DURÉE</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <p>Modèle: {formData.carModel}</p>
                  <p>État: Bon état</p>
                  <p>Du: {formatDate(formData.startDate)}</p>
                  <p>Au: {formatDate(formData.endDate)}</p>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '14px' }}>CONDITIONS DE LOCATION</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <p>Caution: 3000 DH</p>
                  <p>Kilométrage: 250 km/jour</p>
                  <p>Carburant: Plein/Plein</p>
                  <p>Assurance: Tous risques</p>
                </div>
              </div>

              <div style={{ border: '1px solid #000', padding: '10px', marginBottom: '20px', fontSize: '11px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Le locataire s'engage à :</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>• Restituer le véhicule dans son état initial avec le même niveau de carburant</li>
                  <li>• Respecter le code de la route et payer toutes les infractions</li>
                  <li>• Signaler immédiatement tout incident ou accident</li>
                  <li>• Ne pas sous-louer le véhicule ou le conduire hors du territoire national</li>
                </ul>
              </div>

              {/* Signatures */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                <div style={{ width: '45%', textAlign: 'center' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '50px' }}>Le locataire</p>
                  <div style={{ borderTop: '1px solid #000' }}></div>
                  <p style={{ fontSize: '10px', marginTop: '5px' }}>Lu et approuvé + Signature</p>
                </div>
                <div style={{ width: '45%', textAlign: 'center' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '50px' }}>BENDRIOUCH CAR</p>
                  <div style={{ borderTop: '1px solid #000' }}></div>
                  <p style={{ fontSize: '10px', marginTop: '5px' }}>Cachet et signature</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visible Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Réservation de Voiture
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  N° CIN/Passeport
                </label>
                <input
                  type="text"
                  required
                  value={formData.identityNumber}
                  onChange={(e) => setFormData({ ...formData, identityNumber: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Votre numéro d'identité"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom Complet
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Modèle de Voiture
                </label>
                <input
                  type="text"
                  required
                  value={formData.carModel}
                  onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Modèle souhaité"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de Début
                </label>
                <input
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de Fin
                </label>
                <input
                  type="date"
                  required
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  min={formData.startDate || new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
              >
                Générer le Contrat
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 