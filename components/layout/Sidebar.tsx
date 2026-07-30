"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    LayoutDashboard,
    Sprout,
    CalendarDays,
    Flower2,
    ClipboardList,
    BookOpen,
    Dumbbell,
    Settings
} from "lucide-react";

const menu = [
    {
        name: "Dashboard",
        href: "/",
        icon: LayoutDashboard
    },
    {
        name: "Garten",
        href: "/garden",
        icon: Sprout
    },
    {
        name: "Kalender",
        href: "/calendar",
        icon: CalendarDays
    },
    {
        name: "Pflanzen",
        href: "/plants",
        icon: Flower2
    },
    {
        name: "Aufgaben",
        href: "/tasks",
        icon: ClipboardList
    },
    {
        name: "Tagebuch",
        href: "/journal",
        icon: BookOpen
    },
    {
        name: "Training",
        href: "/training",
        icon: Dumbbell
    },
    {
        name: "Einstellungen",
        href: "/settings",
        icon: Settings
    }
];

export default function Sidebar() {

    const pathname = usePathname();

    return (
        <aside className="w-72 h-screen bg-green-800 text-white flex flex-col">

            <div className="text-2xl font-bold p-8 border-b border-green-700">
                🌱 Garden Life
            </div>

            <nav className="flex-1 p-4">

                {menu.map((item) => {

                    const Icon = item.icon;

                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-4 p-4 rounded-xl mb-2 transition

                            ${
                                active
                                    ? "bg-green-600"
                                    : "hover:bg-green-700"
                            }`}
                        >

                            <Icon size={22} />

                            <span>{item.name}</span>

                        </Link>
                    );

                })}

            </nav>

            <div className="p-6 border-t border-green-700 text-sm opacity-70">

                Garden Life Manager

                <br />

                Version 1.0

            </div>

        </aside>
    );
}