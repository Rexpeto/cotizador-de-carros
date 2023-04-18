import Formulario from "./Formulario";

const AppSeguro = () => {
    return (
        <>
            <header className="my-6 font-bold text-2xl">
                <h1>Cotizador de Carros</h1>
            </header>
            <main className="md:w-2/3 lg:w-2/4 p-6 border rounded-lg shadow bg-gray-800/80 border-gray-700 w-full">
                <Formulario />
            </main>
        </>
    );
};

export default AppSeguro;
