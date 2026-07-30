import WeatherCard from "./WeatherCard";
import TasksCard from "./TasksCard";
import GardenCard from "./GardenCard";
import HarvestCard from "./HarvestCard";
import StatsCard from "./StatsCard";

export default function Dashboard() {
    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-4xl font-bold">
                    🌱 Garden Life Manager
                </h1>

                <p className="text-gray-500 mt-2">
                    Willkommen zurück.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                <WeatherCard />

                <TasksCard />

                <GardenCard />

                <HarvestCard />

                <StatsCard />

            </div>

        </div>
    );
}