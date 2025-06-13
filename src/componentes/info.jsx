const diccionarioColoresCards = {
  red: "text-red-500",
  blue: "text-blue-500",
  yellow: "text-yellow-500",
  green: "text-green-500",
  gray: "text-gray-500",
};

const InfoCard = ({
  icono,
  titulo,
  subtitulo,
  descripcion,
  informacion,
  pie,
  tituloBox,
  colorIcono = "gray"
}) => {
  const iconColorClass = diccionarioColoresCards[colorIcono] || "text-gray-500";

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 max-w-3xl text-left mt-8 ml-3 mr-3 md:w-full">
      <div className="flex items-start gap-4 mb-4">
        {icono && <div className={`${iconColorClass} text-2xl`}>{icono}</div>}
        <div>
          <h2 className="text-xl font-semibold">{titulo}</h2>
          <p className="text-gray-500">{subtitulo}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{descripcion}</p>

      {informacion?.length > 0 && (
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h3 className="font-bold mb-2 text-lg">{tituloBox}</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {informacion.map((item, index) => (
              <div key={index}>
                <span className="font-semibold">{item.titulo}:</span> {item.detalle}
              </div>
            ))}
          </ul>
        </div>
      )}

      {pie && <p className="text-gray-600 text-sm">{pie}</p>}
    </div>
  );
};

export default InfoCard;
