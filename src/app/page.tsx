import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4 md:p-6 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center animate-fade-in-down">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">Mohammed El Hammoumi</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#profile" className="hover:text-blue-300 transition-colors">Profil</a></li>
              <li><a href="#experience" className="hover:text-blue-300 transition-colors">Expérience</a></li>
              <li><a href="#skills" className="hover:text-blue-300 transition-colors">Compétences</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
              <li><a href="#languages" className="hover:text-blue-300 transition-colors">Langues</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Bus Animation */}
      <div className="relative w-full h-32 mt-10 overflow-hidden">
        <div className="absolute left-0 animate-truck">
          <Image src="/images/bus.jpg" alt="Bus" width={200} height={100} />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Profile Section */}
        <section id="profile" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Profil</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <div className="w-40 h-32 relative">
              <Image
                src="/images/truck_driver.jpg"
                alt="Truck Driver"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-gray-300 shadow-lg transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="text-lg mt-4 md:mt-0 animate-slide-in-left">
              Chauffeur professionnel avec plus de 14 ans d'expérience dans le transport touristique, de ligne et international. Titulaire de multiples permis (B, C, D, EB, EC, ED). Polyvalent, fiable et adaptable, avec d'excellentes compétences en communication. Trilingue : Arabe, Français, Anglais. Spécialisé dans la conduite de divers types de véhicules et la gestion efficace des passagers.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Expérience Professionnelle</h2>
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold">Chauffeur</h3>
              <p className="text-gray-600">Servi Tour Khadija | Nov 2023 - Présent</p>
              <p>Employé comme chauffeur dans une société de transport touristique basée à Fès.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold">Chauffeur international</h3>
              <p className="text-gray-600">Missouri Transport | 2019 - 2022</p>
              <p>Employé comme chauffeur international dans une entreprise de transport touristique basée à Fès.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold">Chauffeur de ligne</h3>
              <p className="text-gray-600">SIMT STÉ. DE TRANSPORT MOUJAHID TAMASSINTE | 2016 - 2018</p>
              <p>Employé comme chauffeur de ligne dans une société de transport international.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold">Chauffeur</h3>
              <p className="text-gray-600">Transport Bourak International | 2014 - 2016</p>
              <p>Responsable de la conduite de camions pour le transport international de marchandises lourdes.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold">Chauffeur</h3>
              <p className="text-gray-600">Société de Transport Laghozala | 2012 - 2014</p>
              <p>Employé comme chauffeur pour une société de transport basée à Fès, responsable du transport de passagers.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Compétences</h2>
          <ul className="list-disc list-inside space-y-2 animate-slide-in-left">
            <li>Conduite professionnelle de véhicules de transport</li>
            <li>Maîtrise de différents types de véhicules (tourisme, ligne, international)</li>
            <li>Permis de conduire multiples : B, C, D, EB, EC, ED</li>
            <li>Communication avec les passagers</li>
            <li>Connaissance des règles de sécurité routière</li>
            <li>Gestion des itinéraires et de la logistique</li>
            <li>Maintenance de base des véhicules</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Contact</h2>
          <div className="bg-white shadow-md rounded-lg p-6 animate-slide-in-right">
            <p><strong>Téléphone:</strong> +212670168135</p>
            <p><strong>Adresse:</strong> IMM 106 APPT 4 RCE MLY DRISS FES</p>
            <p><strong>Âge:</strong> 52 ans</p>
            <p><strong>État civil:</strong> Marié</p>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Langues</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold">Arabe</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">100%</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold">Français</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">100%</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold">Anglais</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">50%</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 md:p-6 animate-fade-in-up">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Mohammed El Hammoumi. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="tel:+212670168135" className="hover:text-blue-300 transition-colors">Téléphone</a>
            <a href="mailto:email@example.com" className="hover:text-blue-300 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
