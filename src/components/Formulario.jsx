import { marcas, years, planes } from "../constants";
import useCotizador from "../hooks/useCotizador";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Formulario = () => {
    const { handdlerChange, datos, cotizarSeguro } = useCotizador();

    const handdlerSubmit = (e) => {
        e.preventDefault();
        if (Object.values(datos).includes("")) {
            toast.error("Debe rellenar todo el formulario");
            return;
        }

        //? Cotizando
        cotizarSeguro();
    };

    return (
        <>
            <ToastContainer theme="dark" />
            <form onSubmit={handdlerSubmit} className="mb-6">
                <div className="mb-3">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="marca"
                    >
                        Marca
                    </label>
                    <select
                        id="marca"
                        name="marca"
                        className="border text-sm rounded-lg  block w-full p-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150"
                        onChange={(e) => handdlerChange(e)}
                    >
                        <option value="">--Seleccionar--</option>
                        {marcas.map((marca) => (
                            <option value={marca.id} key={marca.id}>
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="year"
                    >
                        Año
                    </label>
                    <select
                        id="year"
                        name="year"
                        onChange={(e) => handdlerChange(e)}
                        className="border text-sm rounded-lg  block w-full p-1.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150"
                    >
                        <option value="">--Seleccionar--</option>
                        {years.map((year) => (
                            <option value={year} key={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Plan:</label>
                    {planes.map((plan) => (
                        <div
                            className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 mb-3"
                            key={plan.id}
                        >
                            <input
                                id={plan.id}
                                type="radio"
                                value={plan.id}
                                name="plan"
                                onChange={(e) => handdlerChange(e)}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                htmlFor={plan.id}
                                className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                {plan.nombre}
                            </label>
                        </div>
                    ))}
                </div>
                <button
                    type="Submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-150"
                >
                    Cotizar
                </button>
            </form>
        </>
    );
};

export default Formulario;
