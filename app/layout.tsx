import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garden Life Manager",
  description: "Garten-, Trainings- und Life-Manager"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}