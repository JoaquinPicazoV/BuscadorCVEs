import { useState } from "react";
import CVECARD from "../componentes/cveCard";
import BUSCADORCVE from "../componentes/buscador";
import CARDDICCIONARIO from "../componentes/cardDiccionario";
import NAVBAR from "../componentes/navbar";


const BUSCADOR = () => {
    const [resultados, setResultados] = useState([]);

    const CVEaProps = (item) => {
        const cve = item.cve;
        const cvss = cve.metrics?.cvssMetricV2;
        const metrics = Array.isArray(cvss) && cvss.length > 0 ? cvss[0].cvssData : {};

        return {
            cve: cve.id || "N/A",
            descripcion: cve.descriptions?.[0]?.value || "Sin descripción",
            severidad: metrics.baseScore || "N/A",
            severidadBase: Array.isArray(cve.metrics?.cvssMetricV2) && cve.metrics.cvssMetricV2.length > 0 ? cve.metrics.cvssMetricV2[0].baseSeverity || "N/A" : "N/A",
            vectorCVSS: metrics.vectorString || "N/A",
            fechaPublicacion: cve.published?.slice(0, 10) || "N/A",
            fechaActualizacion: cve.lastModified?.slice(0, 10) || "N/A",
            cwe: Array.isArray(cve.weaknesses) && cve.weaknesses.length > 0 && Array.isArray(cve.weaknesses[0].description) && cve.weaknesses[0].description.length > 0 ? cve.weaknesses[0].description[0].value || "N/A" : "N/A",
            vectorAtaque: metrics.accessVector || "N/A",
            complejidad: metrics.accessComplexity || "N/A",
            privilegios: metrics.authentication || "N/A",
            interacción: metrics.userInteractionRequired === false ? "NO" : "YES",
        };
    };

    return (
        <div className="bg-[#e8f0ff] min-h-screen w-full text-center justify-center">
            <NAVBAR />
            <div className="flex flex-col items-center w-full p-6 pt-0">
                <h1 className="text-4xl font-bold flex items-center justify-center mb-2">
                    Buscador de CVEs
                </h1>
                <label className="text-gray-700 mb-4 block">
                    Busca vulnerabilidades en la base de datos nacional de vulnerabilidades (NVD)
                </label>
                <details className="bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer md:w-2/3">
                    <summary className="text-lg font-semibold text-red-500">
                        Diccionario de vectores CVSS
                    </summary>
                    <div className="grid md:flex justify-center items-center mt-4">
                        <div className="w-full">
                            <CARDDICCIONARIO
                                titulo={"AV (Access Vector) - Cómo se accede a la vulnerabilidad:"}
                                contenido={<>
                                    <div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>N (Network) = Explotable remotamente a través de una red.
                                    <br /><div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>A (Adjacent) = Explotable solo dentro de la misma subred.
                                    <br /><div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>L (Local) = Requiere acceso físico o local.
                                    <br /><div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>P (Physical) = Necesita interacción física directa con el sistema.
                                </>}
                            />
                            <CARDDICCIONARIO
                                titulo={"AC (Access Complexity) – Dificultad para explotar la vulnerabilidad:"}
                                contenido={<>
                                    <div className="inline-block w-2 h-2 bg-green-500 mr-1 rounded-4xl"></div>L (Low) = Fácil de explotar.
                                    <br /><div className="inline-block w-2 h-2 bg-green-500 mr-1 rounded-4xl"></div>M (Medium) = Complejidad media para explotar.
                                    <br /><div className="inline-block w-2 h-2 bg-green-500 mr-1 rounded-4xl"></div>H (High) = Difícil de explotar.
                                </>}
                            />
                            <CARDDICCIONARIO
                                titulo={"Au (Authentication) - Requisitos de autenticación para explotar la vulnerabilidad:"}
                                contenido={<>
                                    <div className="inline-block w-2 h-2 bg-yellow-500 mr-1 rounded-4xl"></div>N (None) = No requiere autenticación.
                                    <br /><div className="inline-block w-2 h-2 bg-yellow-500 mr-1 rounded-4xl"></div>S (Single) = Requiere una autenticación.
                                    <br /><div className="inline-block w-2 h-2 bg-yellow-500 mr-1 rounded-4xl"></div>M (Multiple) = Requiere múltiples autenticaciones.
                                </>}
                            />
                        </div>
                        <div className="w-full">
                            <CARDDICCIONARIO
                                titulo={"C (Confidentiality Impact) - Impacto en la confidencialidad de los datos:"}
                                contenido={<>
                                    <div className="inline-block w-2 h-2 bg-orange-500 mr-1 rounded-4xl"></div>N (None) = No afecta la confidencialidad.
                                    <br /><div className="inline-block w-2 h-2 bg-orange-500 mr-1 rounded-4xl"></div>P (Partial) = Acceso parcial a información confidencial.
                                    <br /><div className="inline-block w-2 h-2 bg-orange-500 mr-1 rounded-4xl"></div>C (Complete) = Exposición total de la información.
                                </>}
                            />
                            <CARDDICCIONARIO
                                titulo={"I (Integrity Impact) - Impacto en la integridad de los datos:"}
                                contenido={<>
                                    <div className="inline-block w-2 h-2 bg-purple-500 mr-1 rounded-4xl"></div>N (None) = No afecta la integridad
                                    <br /><div className="inline-block w-2 h-2 bg-purple-500 mr-1 rounded-4xl"></div>P (Partial) = Modificación parcial de los datos
                                    <br /><div className="inline-block w-2 h-2 bg-purple-500 mr-1 rounded-4xl"></div>C (Complete) = Modificación total de los datos.
                                </>}
                            />
                            <CARDDICCIONARIO
                                titulo={"A (Availability Impact) - Impacto en la disponibilidad del sistema:"}
                                contenido={<>
                                    <div className="inline-block w-2 h-2 bg-blue-500 mr-1 rounded-4xl"></div>N (None) = No afecta la disponibilidad.
                                    <br /><div className="inline-block w-2 h-2 bg-blue-500 mr-1 rounded-4xl"></div>P (Partial) = Disminución parcial de disponibilidad.
                                    <br /><div className="inline-block w-2 h-2 bg-blue-500 mr-1 rounded-4xl"></div>C (Complete) = Inaccesibilidad total del sistema.
                                </>}
                            />
                        </div>
                    </div>
                </details>
                <BUSCADORCVE resultados={setResultados} />
                <div className="mt-8 space-y-8 max-w-3xl mx-auto">
                    {resultados.length === 0 && (<p className="text-gray-500">No hay resultados para mostrar</p>)}
                    {resultados.map((item) => {
                        const pk = item.cve?.id || Math.random().toString(36);
                        return <CVECARD key={pk} {...CVEaProps(item)} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default BUSCADOR;
