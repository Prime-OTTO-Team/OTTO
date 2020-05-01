export const currencyFormatter = (number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })   
    return formatter.format(number)
}
// This function formats numbers into currency format