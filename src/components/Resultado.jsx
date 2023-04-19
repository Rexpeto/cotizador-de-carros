const Resultado = ({ resultado }) => {
    if (resultado === 0) return null;

    return <span className="font-bold text-xl">{resultado}</span>;
};

export default Resultado;
