const formattedUniversalDate = (date) => {
    return String(date).replace(/-/g, '/')
}
 
export default formattedUniversalDate;