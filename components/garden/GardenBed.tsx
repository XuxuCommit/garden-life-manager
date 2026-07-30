type Plant = {
  name: string;
  emoji: string;
};

type GardenBedProps = {
  title: string;
  plants: Plant[];
};

export default function GardenBed({
  title,
  plants,
}: GardenBedProps) {
  return (
    <button className="rounded-2xl bg-white shadow-md p-5 border hover:shadow-xl transition text-left w-full">
      <h2 className="font-bold text-xl mb-4">{title}</h2>

      <div className="flex flex-wrap gap-2">
        {plants.map((plant) => (
          <span
            key={plant.name}
            className="px-3 py-2 rounded-full bg-green-100"
          >
            {plant.emoji} {plant.name}
          </span>
        ))}
      </div>
    </button>
  );
}