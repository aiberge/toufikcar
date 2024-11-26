import Hero from '../components/Hero';
import { Car, MapPin, Shield, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Pourquoi choisir <span className="text-yellow-500">BENDRIOUCH CAR</span> ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Car,
                title: 'Véhicules Premium',
                description: 'Une flotte moderne et diversifiée pour répondre à tous vos besoins'
              },
              {
                icon: Shield,
                title: 'Assurance Complète',
                description: 'Voyagez en toute sérénité avec notre couverture d\'assurance'
              },
              {
                icon: Clock,
                title: 'Service 24/7',
                description: 'Une équipe disponible à tout moment pour vous accompagner'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-yellow-500 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Notre engagement qualité
              </h2>
              <p className="text-lg mb-8">
                Chez BENDRIOUCH CAR, nous nous engageons à vous offrir une expérience de location
                exceptionnelle. Nos véhicules sont minutieusement entretenus et
                préparés pour garantir votre confort et votre sécurité.
              </p>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-yellow-500 mr-2" />
                <span>Situé au cœur de la ville pour votre commodité</span>
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80"
                alt="Showroom BENDRIOUCH CAR"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}