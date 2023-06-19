import stock from "../data/stock.json"

export const traerDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 1000)
    })
}