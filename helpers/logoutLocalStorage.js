const logoutLocalStorage = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('time_to_refresh_token')
    window.localStorage.removeItem('end_life_cicle_token')
    window.localStorage.removeItem('infos_user_logged')
}

export default logoutLocalStorage