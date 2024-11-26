import { Users, Star, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <div className="relative h-[40vh] bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80')",
            opacity: 0.6
          }}
        />
        <div className="relative h-full flex items-center justify-center text-white">
          <h1 className="text-5xl font-bold">À propos de BENDRIOUCH CAR</h1>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Notre <span className="text-yellow-500">histoire</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Depuis notre création, BENDRIOUCH CAR s'est engagé à redéfinir l'expérience
                de location de voitures au Maroc. Notre mission est simple : offrir
                un service premium accessible à tous, combinant qualité des véhicules
                et excellence du service client.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                {[
                  { icon: Users, value: '10K+', label: 'Clients satisfaits' },
                  { icon: Star, value: '4.9/5', label: 'Note moyenne' },
                  { icon: Award, value: '5 ans', label: "d'expérience" }
                ].map((stat, index) => (
                  <div key={index}>
                    <stat.icon className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <div className="font-bold text-xl">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80"
                alt="Notre flotte"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Témoignages <span className="text-yellow-500">clients</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah L.',
                role: 'Cliente régulière',
                content: 'Service exceptionnel ! Les voitures sont toujours impeccables et le personnel est très professionnel.'
              },
              {
                name: 'Mohammed R.',
                role: 'Client business',
                content: 'BENDRIOUCH CAR est mon partenaire de confiance pour tous mes déplacements professionnels. Qualité et fiabilité garanties.'
              },
              {
                name: 'Julie M.',
                role: 'Touriste',
                content: 'Une expérience parfaite du début à la fin. Je recommande vivement BENDRIOUCH CAR pour découvrir le Maroc.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}