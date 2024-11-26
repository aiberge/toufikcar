import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement form submission logic
    alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-16">
          Contactez-<span className="text-yellow-500">nous</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-black text-white p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <div className="font-semibold">Téléphone</div>
                    <a href="tel:+212661140298" className="hover:text-yellow-500">
                      +212 661-140298
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:contact@bendriouchcar.ma" className="hover:text-yellow-500">
                      contact@bendriouchcar.ma
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <div className="font-semibold">Adresse</div>
                    <p>123 Avenue Mohammed V, Casablanca, Maroc</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-yellow-500">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-yellow-500">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-yellow-500">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846447471328!2d-7.632492684797446!3d33.592882880730445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzM0LjQiTiA3wrAzNyc1Ny4wIlc!5e0!3m2!1sfr!2sma!4v1645567890123!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}