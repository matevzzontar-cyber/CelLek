const patients = [
  { id: 1, name: "Ana", age: 12, country: "Slovenija", stage: "blaga" },
  { id: 2, name: "Marko", age: 35, country: "Hrvaška", stage: "zmerna" },
  { id: 3, name: "Luka", age: 42, country: "Avstrija", stage: "težja" },
];

export default function RegisterPage() {
  return (
    <section className="mt-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-600">Register bolnikov</h1>
      <p className="mt-4 text-gray-700">
        Tukaj je primer registra bolnikov s celiakijo (mock podatki).
      </p>

      <table className="mt-6 w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Ime</th>
            <th className="border border-gray-300 p-2">Starost</th>
            <th className="border border-gray-300 p-2">Država</th>
            <th className="border border-gray-300 p-2">Stopnja bolezni</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="text-center">
              <td className="border border-gray-300 p-2">{p.name}</td>
              <td className="border border-gray-300 p-2">{p.age}</td>
              <td className="border border-gray-300 p-2">{p.country}</td>
              <td className="border border-gray-300 p-2">{p.stage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
