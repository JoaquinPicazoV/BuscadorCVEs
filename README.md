# 🚀 Buscador de CVE con API de NVD

Breve descripción del proyecto:  
Esta es un proyecto construido con **React.js** que permite buscar CVEs mediante el uso de la API de NVD. Además de acceder al CVE, podría mostrar detalles relevantes para un pentester, como una breve descripción, severidad, vector de ataque CVSS, CWE asociado, detalles de ataque (medio de ataque, complejidad y si requiere privilegios), entre otros.

---

## 🔌 API Utilizada

Esta app utiliza la siguiente API:

- [CVE API from NVD (keywordSearch)](https://nvd.nist.gov/developers/vulnerabilities): Esta API tiene diferente formas de buscar un CVE modifcando los parámetros de la url de la petición. Por ejemplo, puede ser por nombre, id de CVE, tag, cvss metrics, cvss severity, cweid, etc.
En mi caso utilicé el método de keywordSearch, que el usuario ingresa una palabra y mostrará los CVE que en su descripción tengan escrita de forma exacta esa palabra.

---

## 🛠️ Instrucciones para correr la app

1. Clonar este repositorio
2. Abrir el proyecto en un IDE (por ejemplo: Visual Studio Code)
3. Ubicar la terminal CMD en la carpeta del proyecto y lanzarlo en el localhost usando "npm run dev" e ingresando al puerto localhost que se entrega al ejecutarlo.

## 📊 Funciones respecto a algunos punto de la rúbrica
1. Navegación (React Router) El proyecto cuenta con 2 rutas, las cuales son: /menu y /buscador. Se utiliza Routes, Route, Navigate, Link, useLocation y BrowserRouter de react-router-dom.
2. Reactividad (uso de useState y useEffect en caso de React): Uso useState y useEffect de react para manejar el estado de la aplicación con cambios en tiempo real basados en acciones de usuario. Se puede ver en src/compontentes/buscador.jsx que se utiliza useState y useEffect para buscar la palabra ingresada por el usuario cuando se haya detectado un cambio en el input, también se usa para controlar el "buscando..." que notifica el usuario que se está realizando la consulta a la API.
3. Comunicación entre componentes (en React): En /src/paginas/buscador.jsx se ve comunicación entre componentes de padre a hijo (props) en: 
```jsx
<BUSCADORCVE onResults={setResultados} />
```
y también hay un props estructurado en el mismo archivo exactamente en:
```jsx
<CVECARD key={pk} {...CVEaProps(item)} />
``` 
porque le pasa de forma ordenada/estructurada muchos datos como props al componente CVECARD, que es para posteriormente mostrarlos en las cards de CVEs. Creo que React no tiene emit como Vue.

4. Inputs, formularios y lógica condicional en React: En /src/componentes/buscador.jsx hay un input que interactua con el usuario y controlado por un useState en el siguiente fragmento:
```jsx 
<input
    type="text"
    placeholder="Ingrese palabra clave para buscar en descripciones de CVEs"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="flex-1 p-2 rounded bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
``` 
El fragmento anterior y otros elementos están dentro de la etiqueta:
```jsx 
<form></form> 
```
Existe lógica condicional en /src/componentes/buscador.jsx exactamente en:
```jsx  
{cargando && <span className="text-blue-600">Buscando...</span>}
{error && (<p className="text-red-600 ml-4 text-sm font-semibold">{error}</p>)}
```
y en /src/paginas/buscador.jsx también hay lógica condicional en:
```jsx 
{resultados.length === 0 && (<p className="text-gray-500">No hay resultados para mostrar</p>)}
``` 
y en /src/pagina/buscador.jsx para trabajar los datos de la API utilizo lógica condicional en caso de que no exista el parámetro en alguna búsqueda o no lo pueda procesar bien, exactamente en el siguiente fragmento de código:
```jsx 
return {
    cve: cve.id || "N/A",
    descripcion: cve.descriptions?.[0]?.value || "Sin descripción",
    severidad: metrics.baseScore || "N/A",
    severidadBase: Array.isArray(cve.metrics?.cvssMetricV2) && cve.metrics.cvssMetricV2.length > 0 ? cve.metrics.cvssMetricV2[0].baseSeverity || "N/A" : "N/A",
    vectorCVSS: metrics.vectorString || "N/A",
    fechaPublicacion: cve.published?.slice(0, 10) || "N/A",
    fechaActualizacion: cve.lastModified?.slice(0, 10) || "N/A",
    cwe: Array.isArray(cve.weaknesses) && cve.weaknesses.length > 0 && Array.isArray(cve.weaknesses[0].description) && cve.weaknesses[0].description.length > 0 ?   cve.weaknesses[0].description[0].value || "N/A" : "N/A",
    vectorAtaque: metrics.accessVector || "N/A",
    complejidad: metrics.accessComplexity || "N/A",
    privilegios: metrics.authentication || "N/A",
    interacción: metrics.userInteractionRequired === false ? "NO" : "YES",
};
```
y en /src/componentes/cveCard.jsx hay más lógica condicional exactamente en: 
```jsx  
{resultados.length === 0 && (<p className="text-gray-500">No hay resultados para mostrar</p>)}
```
Respecto a listas, en /src/paginas/buscador.jsx se hace uso de .map() exactamente en:
```jsx 
{resultados.map((item) => {
    const pk = item.cve?.id || Math.random().toString(36);
    return <CVECARD key={pk} {...CVEaProps(item)} />;
})}
```

Hay más fragmentos dentro de los archivos existentes, pero esos son los principales.