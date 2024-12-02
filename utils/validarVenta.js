const isNumeric = (string) => string == Number.parseFloat(string)
const errorMsg = "Los datos ingresados no son válidos";

export const validarVenta = (juegoId, cantidad) => {
    if (!isNumeric(juegoId) || !isNumeric(cantidad)) {
        throw Error(errorMsg);
    }
    if (juegoId < 0 || cantidad < 0) {
        throw Error(errorMsg);
    }
}