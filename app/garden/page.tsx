import GardenCanvas from "@/components/garden/GardenCanvas";

export default function GardenPage() {
  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          🌱 Mein Garten
        </h1>

        <p className="text-gray-500">
          Plane deinen Garten interaktiv.
        </p>
      </div>

      <GardenCanvas />
    </main>
  );
}