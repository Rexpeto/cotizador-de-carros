import { useState, createContext } from "react";
import {
    calcularMarca,
    calcularPlan,
    formatearDinero,
    obtenerDiferenciaYear,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    });

    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

    const handdlerChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    //? Función para cotizar los seguros
    const cotizarSeguro = () => {
        //* Base
        let resultado = 2000;

        //* Diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year);

        //* Restar el 3% por cada año
        resultado -= (diferencia * 3 * resultado) / 100;

        //* Europeo 30%
        //* Americano 15%
        //* Asitico 5%
        resultado *= calcularMarca(datos.marca);

        //* Básico 20%
        //* Completo 50%
        resultado *= calcularPlan(datos.plan);

        resultado = formatearDinero(resultado);

        setCargando(true);

        setTimeout(() => {
            setCargando(false);
        }, 5000);

        setResultado(resultado);
    };

    return (
        <CotizadorContext.Provider
            value={{
                handdlerChange,
                datos,
                cotizarSeguro,
                resultado,
                cargando,
            }}
        >
            {children}
        </CotizadorContext.Provider>
    );
};

export { CotizadorProvider };

export default CotizadorContext;
