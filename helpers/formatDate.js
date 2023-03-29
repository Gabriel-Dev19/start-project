const formatDate = (date) => {
    const newDate = new Date(Date.parse(date))
    const dateCompleted = newDate.getUTCDate() + '/' + (newDate.getUTCMonth() + 1) + '/' + newDate.getUTCFullYear()
    return dateCompleted;
}
 
export default formatDate;