
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Cel-Lek
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">Domov</Link>
            <Link href="/about">O celiakiji</Link>
            <Link href="/register">Register</Link>
            <Link href="/ingredients">Sestavine</Link>
            <Link href="/recipes">Recepti</Link>
            <Link href="/contact">Kontakt</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-red-700 px-4 py-2 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)}>Domov</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>O celiakiji</Link>
          <Link href="/register" onClick={() => setIsOpen(false)}>Register</Link>
          <Link href="/ingredients" onClick={() => setIsOpen(false)}>Sestavine</Link>
          <Link href="/recipes" onClick={() => setIsOpen(false)}>Recepti</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Kontakt</Link>
        </div>
      )}
    </nav>
  );
}
