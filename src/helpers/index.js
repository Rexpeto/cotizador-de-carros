export const obtenerDiferenciaYear = (year) => {
    return new Date().getFullYear() - year;
};

export const calcularMarca = (marca) => {
    let i;

    switch (marca) {
        case "1":
            i = 1.3;
            break;
        case "2":
            i = 1.15;
            break;
        case "3":
            i = 1.05;
            break;
        default:
            console.log("Valor inválido");
            break;
    }

    return i;
};

export const calcularPlan = (plan) => {
    return plan === "1" ? 1.2 : 1.5;
};

export const formatearDinero = (dinero) => {
    return dinero.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};
