import InfoCard from "../componentes/info";
import { FaBug, FaExclamationTriangle, FaChartBar, FaDatabase, FaShieldAlt } from "react-icons/fa";
import NAVBAR from "../componentes/navbar";

const MENU = () => {
    return (
        <div className="bg-[#e8f0ff] w-full h-full justify-center text-center">
            <NAVBAR />
            <div className="flex flex-col items-center px-4">
                <h1 className="text-4xl font-bold flex items-center justify-center ml-3 mr-3"><FaShieldAlt className="text-blue-500 text-2xl mr-3" />Guía básica de Ciberseguridad<FaShieldAlt className="text-blue-500 ml-3 text-2xl" /></h1>
                <label className="text-gray-500 ml-3 mr-3">Conceptos fundamentales de ciberseguridad: CVE, CWE, CVSS y NVD</label>
                <div className="w-full flex flex-col items-center">
                    <InfoCard
                        icono={<FaBug />}
                        titulo="CVE - Common Vulnerabilities and Exposures"
                        subtitulo="Sistema de identificación estándar para vulnerabilidades de seguridad conocidas"
                        descripcion="CVE es un diccionario de vulnerabilidades y exposiciones de seguridad conocidas públicamente. 
                                    Cada entrada CVE incluye un número de identificación único, una descripción estandarizada y al menos una 
                                    referencia pública para obtener más información."
                        informacion={[
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>Formato estándar</>,
                                detalle: "CVE-YYYY-NNNN (año + número secuencial)"
                            },
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>Identificación única</>,
                                detalle: "Cada vulnerabilidad tiene un ID único e inmutable"
                            },
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>Descripción estandarizada</>,
                                detalle: "Información consistente y verificada"
                            },
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>Referencias públicas</>,
                                detalle: "Enlaces a fuentes adicionales de información"
                            }
                        ]}
                        pie="El programa CVE es mantenido por MITRE Corporation y financiado por el Departamento de Seguridad 
                            Nacional de Estados Unidos. Facilita el intercambio de información sobre vulnerabilidades entre 
                            diferentes herramientas, bases de datos y servicios de seguridad."
                        tituloBox="Características principales:"
                        colorIcono="red"
                    />

                    <InfoCard
                        icon={<FaExclamationTriangle />}
                        titulo="CWE - Common Weakness Enumeration"
                        subtitulo="Lista categorizada de debilidades de seguridad de software y hardware"
                        descripcion="CWE es una lista desarrollada por la comunidad de tipos comunes de debilidades de seguridad 
                                    de software y hardware. Sirve como lenguaje común para describir fallas de seguridad en arquitectura, 
                                    diseño o código, proporcionando una base para la identificación, mitigación y prevención de debilidades."
                        informacion={[
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-yellow-500 mr-1 rounded-4xl"></div>Lenguaje común</>,
                                detalle: "Terminología estándar para describir debilidades"
                            },
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-yellow-500 mr-1 rounded-4xl"></div>Herramientas de análisis</>,
                                detalle: "Base para herramientas de identificación automática"
                            },
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-yellow-500 mr-1 rounded-4xl"></div>Educación</>,
                                detalle: "Facilita la enseñanza sobre seguridad de software"
                            },
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-yellow-500 mr-1 rounded-4xl"></div>Investigación</>,
                                detalle: "Permite el estudio sistemático de debilidades"
                            }
                        ]}
                        pie="CWE organiza las debilidades en una jerarquía que va desde conceptos abstractos hasta 
                            implementaciones específicas, permitiendo diferentes niveles de abstracción según las necesidades 
                            del usuario. Es mantenido por MITRE Corporation con apoyo de la comunidad de seguridad."
                        tituloBox="Propósitos principales:"
                        colorIcono="yellow"
                    />

                    <InfoCard
                        icon={<FaChartBar />}
                        titulo="CVSS - Common Vulnerability Scoring System"
                        subtitulo="Marco estándar para evaluar la severidad de vulnerabilidades de seguridad"
                        descripcion="CVSS proporciona una forma estandarizada de capturar las características principales 
                                    de una vulnerabilidad y producir una puntuación numérica que refleje su severidad. El sistema permite 
                                    a las organizaciones priorizar la respuesta y asignación de recursos según el riesgo real."
                        informacion={[
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-blue-500 mr-1 rounded-4xl"></div>Base</>,
                                detalle: "Características intrínsecas de la vulnerabilidad"
                            },
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-blue-500 mr-1 rounded-4xl"></div>Temporal</>,
                                detalle: "Características que cambian con el tiempo"
                            },
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-blue-500 mr-1 rounded-4xl"></div>Características específicas del entorno</>,
                                detalle: "Información consistente y verificada"
                            },
                            {
                                titulo: <><label className="font-bold mb-2 text-lg">Escala de severidad</label></>,
                                detalle:
                                    <>
                                        <br /><div className="inline-block w-3 h-3 bg-red-600 mr-1"></div><b>Crítica:</b> 7.0 - 10.0
                                        <br /><div className="inline-block w-3 h-3 bg-yellow-300 mr-1"></div><b>Media:</b> 4.0 - 6.9
                                        <br /><div className="inline-block w-3 h-3 bg-green-600 mr-1"></div><b>Baja:</b> 0.1 - 3.9
                                    </>
                            },
                        ]}
                        pie="El programa CVE es mantenido por MITRE Corporation y financiado por el Departamento de Seguridad 
                            Nacional de Estados Unidos. Facilita el intercambio de información sobre vulnerabilidades entre 
                            diferentes herramientas, bases de datos y servicios de seguridad."
                        tituloBox="Grupos de métricas:"
                        colorIcono="blue"
                    />

                    <InfoCard
                        icon={<FaDatabase />}
                        titulo="NVD - National Vulnerability Database"
                        subtitulo="Base de datos integral de vulnerabilidades mantenida por NIST"
                        descripcion="La Base de Datos Nacional de Vulnerabilidades es el repositorio del gobierno de Estados 
                                    Unidos para datos de gestión de vulnerabilidades basados en estándares. Es mantenida por el National 
                                    Institute of Standards and Technology (NIST) y proporciona información detallada sobre vulnerabilidades 
                                    conocidas."
                        informacion={[
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-green-500 mr-1 rounded-4xl"></div>Datos CVE completos</>,
                                detalle: "Información detallada de cada vulnerabilidad"
                            },
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-green-500 mr-1 rounded-4xl"></div>Puntuaciones CVSS</>,
                                detalle: "Análisis de severidad estandarizado"
                            },
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-green-500 mr-1 rounded-4xl"></div>Mapeo CWE</>,
                                detalle: "Clasificación de tipos de debilidades"
                            },
                            {
                                titulo: <><div className="inline-block w-2 h-2 bg-green-500 mr-1 rounded-4xl"></div>Referencias técnicas</>,
                                detalle: "Enlaces a parches, advisories y análisis"
                            },
                            {
                                titulo: <><label className="font-bold mb-2 text-lg">Acceso y utilización</label></>,
                                detalle:
                                    <>
                                        <br /><div className="inline-block w-2 h-2 bg-green-500 mr-1 rounded-4xl"></div><span className="font-semibold">API REST gratuita:</span> Acceso programático a todos los datos
                                        <br /><div className="inline-block w-2 h-2 bg-green-500 mr-1 rounded-4xl"></div><span className="font-semibold">Feeds JSON/XML:</span> Descargas masivas de datos estructurados
                                        <br /><div className="inline-block w-2 h-2 bg-green-500 mr-1 rounded-4xl"></div><span className="font-semibold">Interfaz web:</span> Búsqueda y navegación interactiva
                                        <br /><div className="inline-block w-2 h-2 bg-green-500 mr-1 rounded-4xl"></div><span className="font-semibold">Actualizaciones continuas:</span> Información actualizada diariamente
                                    </>
                            },
                        ]}
                        pie="El programa CVE es mantenido por MITRE Corporation y financiado por el Departamento de Seguridad 
                            Nacional de Estados Unidos. Facilita el intercambio de información sobre vulnerabilidades entre 
                            diferentes herramientas, bases de datos y servicios de seguridad."
                        tituloBox="Contenido y características:"
                        colorIcono="green"
                    />
                </div>
            </div>
        </div>
    );
};

export default MENU;
