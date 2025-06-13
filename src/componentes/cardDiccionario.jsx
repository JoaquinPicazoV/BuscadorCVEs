const CARDDICCIONARIO = ({titulo, contenido}) => {
    return (
        <div className="text-left bg-white mt-5 p-5 rounded-2xl">
            <h1 className="font-bold">{titulo}</h1>
            <label>{contenido}</label>
        </div>
    );
};

export default CARDDICCIONARIO;
