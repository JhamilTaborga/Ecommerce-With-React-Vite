/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of objects
 * @returns {number} Total Price
 */
export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
}