import { useState, createContext } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    });

    const handdlerChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <CotizadorContext.Provider
            value={{
                handdlerChange,
                datos,
            }}
        >
            {children}
        </CotizadorContext.Provider>
    );
};

export { CotizadorProvider };

export default CotizadorContext;
