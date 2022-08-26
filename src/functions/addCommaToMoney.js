export const addCommaToMoney = (money) => {
  return money
    .toString()
    .split('')
    .reverse()
    .map((number, index) => {
      if ((index + 1) % 3 === 0 && index !== money.toString().length - 1) {
        return `,${number}`
      }
      return number
    })
    .reverse()
    .join('')
}
