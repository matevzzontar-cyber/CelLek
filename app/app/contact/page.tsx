"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Za zdaj samo izpišemo v konzolo
    console.log({ name, email, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="mt-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-red-600">Kontakt</h1>
      <p className="mt-4 text-gray-700">
        Pošlji nam sporočilo. Trenutno obrazec še ni povezan z e-pošto, a ga
        lahko v naslednji fazi povežemo (npr. z Resend, Mailgun ali Supabase).
      </p>

      {submitted && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          ✅ Sporočilo poslano (demo način).
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Ime"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="E-pošta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Sporočilo"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded h-32"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Pošlji
        </button>
      </form>
    </section>
  );
}
