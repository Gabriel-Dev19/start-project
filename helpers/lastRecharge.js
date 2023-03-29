const lastRecharge = () => {
    const day = new Date().getUTCDate()
    const month = new Date().getUTCMonth() + 1
    const year = new Date().getUTCFullYear()
    return `${year}/${month}/${day} 00:00:00`
}
 
export default lastRecharge;