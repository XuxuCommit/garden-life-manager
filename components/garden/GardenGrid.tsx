import GardenBed from "./GardenBed";

const beds = [
  {
    title: "Beet 1",
    plants: [
      { name: "Tomaten", emoji: "🍅" },
      { name: "Basilikum", emoji: "🌿" },
      { name: "Salat", emoji: "🥬" },
    ],
  },
  {
    title: "Beet 2",
    plants: [
      { name: "Karotten", emoji: "🥕" },
      { name: "Zwiebeln", emoji: "🧅" },
      { name: "Randen", emoji: "❤️" },
    ],
  },
  {
    title: "Beet 3",
    plants: [
      { name: "Kartoffeln", emoji: "🥔" },
      { name: "Knoblauch", emoji: "🧄" },
      { name: "Kohl", emoji: "🥬" },
    ],
  },
  {
    title: "Blumenbeet",
    plants: [
      { name: "Zinnien", emoji: "🌸" },
      { name: "Kosmeen", emoji: "🌼" },
      { name: "Sonnenblumen", emoji: "🌻" },
    ],
  },
];

export default function GardenGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {beds.map((bed) => (
        <GardenBed
          key={bed.title}
          title={bed.title}
          plants={bed.plants}
        />
      ))}
    </div>
  );
}