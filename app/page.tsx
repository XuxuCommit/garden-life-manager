export default function HomePage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-primary">
          🌱 Garden Life Manager
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Willkommen in deiner persönlichen Garten- und Life-App.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

          <div className="card">
            <h2 className="text-2xl font-semibold">🌿 Garten</h2>
            <p>Beetplan, Pflanzen und Mischkultur.</p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold">📅 Kalender</h2>
            <p>Aussaat-, Pflanz- und Ernteplanung.</p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold">✅ Aufgaben</h2>
            <p>Monatsaufgaben und Erinnerungen.</p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold">📷 Gartentagebuch</h2>
            <p>Fotos, Notizen und Erträge.</p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold">🏋️ Training</h2>
            <p>Trainingspläne und Fortschritt.</p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold">🤖 KI-Assistent</h2>
            <p>Empfehlungen für Garten und Alltag.</p>
          </div>

        </div>
      </div>
    </main>
  );
}