import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Cel-Lek",
  description: "Informacijski portal za celiakijo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="p-6 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
