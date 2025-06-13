import { FaFire, FaCompass, FaRegCalendarAlt, FaSyncAlt, FaLockOpen, FaFingerprint } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";

const colorSeveridad = {
    HIGH: "bg-red-600 text-white",
    MEDIUM: "bg-yellow-300 text-black",
    LOW: "bg-green-600 text-white",
    NONE: "bg-gray-500 text-white"
};

const CVECARD = ({
    cve,
    descripcion,
    severidad,
    severidadBase,
    vectorCVSS,
    fechaPublicacion,
    fechaActualizacion,
    cwe,
    vectorAtaque,
    complejidad,
    privilegios,
    interacción,
}) => {

    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 text-left mt-8 w-full">
            <div className="flex items-start gap-4 mb-4">
                <div>
                    <div className="flex items-center">
                        <FaFingerprint className="text-blue-500 mr-1" />
                        <h2 className="text-xl font-bold">{cve}</h2>
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-500">{descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="grid md:flex justify-between">
                <div>
                    <div className="flex items-center ">
                        <FaFire className="text-red-500 mr-1" /><label className=""><b>Severidad:</b> <label className={`${colorSeveridad[severidadBase] || "bg-gray-500 text-white"} p-1 rounded-2xl`}>{severidad} ({severidadBase})</label></label>
                    </div>
                    <div className="flex items-center">
                        <FaCompass className="text-yellow-500 mr-1" /><label><b>Vector CVSS:</b> {vectorCVSS}</label>
                    </div>
                    <div className="grid">
                        <div className="flex items-center">
                            <FaRegCalendarAlt className="text-blue-500 mr-1" /><label><b>Fecha publicación:</b> {fechaPublicacion}</label>
                        </div>
                        <div className="flex items-center">
                            <FaSyncAlt className="text-blue-500 mr-1" /><label><b>Fecha actualización:</b> {fechaActualizacion}</label>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaLockOpen className="text-yellow-500 mr-1" /><label><b>CWE:</b> {cwe}</label>
                    </div>
                </div>
                <div>
                    <div className="grid mt-4 md:mt-0">
                        <div className="flex items-center">
                            <GiCrossedSwords className="text-red-500 mr-1" /><label><b>Detalles de ataque:</b></label>
                        </div>
                        <label><div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>Vector de ataque: {vectorAtaque}</label>
                        <label><div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>Complejidad: {complejidad}</label>
                        <label><div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>Privilegios: {privilegios}</label>
                        <label><div className="inline-block w-2 h-2 bg-red-500 mr-1 rounded-4xl"></div>Interacción: {interacción}</label>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CVECARD;
