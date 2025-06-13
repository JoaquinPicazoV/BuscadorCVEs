import { useState, useEffect } from "react";

export default function BUSCADORCVE({ resultados }) {
  const [query, setQuery] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [error, setError] = useState(null);

  const buscarCVE = async (frase) => {
    if (!frase.trim()) {
      resultados && resultados([]);
      setError(null);
      setBuscando(false);
      return;
    }

    setBuscando(true);
    setError(null);
    try {const respuesta = await fetch(`https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=${encodeURIComponent(frase)}&resultsPerPage=10`);
      if (!respuesta.ok) throw new Error("Esa información no está disponible");
      const datos = await respuesta.json();
      resultados && resultados(datos.vulnerabilities || []);
    } catch (err) {
      setError(err.message);
      resultados && resultados([]);
    } finally {
      setBuscando(false);
    }
  };

  useEffect(() => {
    const temporizador = setTimeout(() => {
      buscarCVE(query);
    }, 500); 

    return () => clearTimeout(temporizador); 
  }, [query]);

  return (
    <form className="flex w-full items-center md:w-2/3" onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        placeholder="Ingrese palabra clave para buscar en descripciones de CVEs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-2 rounded bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {buscando && <span className="text-blue-600 ml-4">Buscando...</span>}
      {error && (
        <p className="text-red-600 ml-4 text-sm font-semibold">{error}</p>
      )}
    </form>
  );
}
