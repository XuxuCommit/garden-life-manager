import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
    title: "Garden Life Manager",
    description: "Dein persönlicher Life Manager"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <html lang="de">

            <body>

                <div className="flex">

                    <Sidebar />

                    <main className="flex-1 bg-gray-100 min-h-screen p-8">

                        {children}

                    </main>

                </div>

            </body>

        </html>

    );
}