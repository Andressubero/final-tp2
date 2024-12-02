const isNumeric = (string) => string == Number.parseFloat(string)
const errorMsg = "Los datos ingresados no son válidos";

export const validarJuego = (nombre, categoria, precio, stock) => {
    if (!nombre || !categoria) {
        throw Error(errorMsg);
    }
    if (!isNumeric(precio) || !isNumeric(stock)) {
        throw Error(errorMsg);
    }
    if (precio < 0 || stock < 0) {
        throw Error(errorMsg);
    }
    if (typeof nombre !== 'string' || typeof categoria !== 'string') {
        throw new Error(errorMsg);
    }
}