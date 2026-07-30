import GardenCanvas from "@/components/garden/GardenCanvas";

export default function GardenPage() {
  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">🌱 Mein Garten</h1>
        <p className="text-gray-500">
          Übersicht über deine Beete.
        </p>
      </div>

      <GardenGrid />
    </main>
  );
}