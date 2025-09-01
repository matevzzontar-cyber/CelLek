export default function AboutPage() {
  return (
    <section className="mt-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-red-600">O celiakiji</h1>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Celiakija je avtoimunska bolezen, pri kateri gluten sproži imunski odziv
        v tankem črevesu. Dolgoročna izpostavljenost glutenu poškoduje črevesno
        sluznico in otežuje absorpcijo hranil.
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Simptomi vključujejo prebavne težave, utrujenost, pomanjkanje vitaminov
        in mineralov ter druge zdravstvene zaplete. Edina učinkovita terapija
        danes je stroga brezglutenska dieta.
      </p>
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Več virov in študij</h2>
        <ul className="list-disc list-inside mt-2 text-blue-700">
          <li>
            <a href="https://celiac.org" target="_blank">
              Celiac Disease Foundation
            </a>
          </li>
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/?term=celiac+disease" target="_blank">
              PubMed raziskave
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
