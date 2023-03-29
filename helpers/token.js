const insertTimeToRefreshToken = () => localStorage.setItem('time_to_refresh_token', new Date(Date.now() + 25*60000).valueOf())
const setEndLifeCicleToken = () => localStorage.setItem('end_life_cicle_token', new Date(Date.now() + 30*60000).valueOf())

export { insertTimeToRefreshToken, setEndLifeCicleToken }