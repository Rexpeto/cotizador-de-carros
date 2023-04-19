import useCotizador from "../hooks/useCotizador";
import Formulario from "./Formulario";
import Resultado from "./Resultado";

const AppSeguro = () => {
    const { resultado, cargando } = useCotizador();

    return (
        <>
            <header className="my-6 font-bold text-2xl">
                <h1>Cotizador de Carros</h1>
            </header>
            <main className="md:w-2/3 lg:w-2/4 p-6 border rounded-lg shadow bg-gray-800/80 border-gray-700 w-full">
                <Formulario />
                <div className="flex flex-col items-center justify-center">
                    {cargando ? (
                        <span className="loader"></span>
                    ) : (
                        <Resultado resultado={resultado} />
                    )}
                </div>
            </main>
        </>
    );
};

export default AppSeguro;
