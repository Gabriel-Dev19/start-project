const calcTimeZone = (date) => {
    return new Date(date).valueOf() - (new Date().getTimezoneOffset() * 60000)
}
 
export default calcTimeZone;