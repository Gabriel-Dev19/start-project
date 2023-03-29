export const getLang = () => {
    return () => {
        if (typeof window !== 'undefined') {
            window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : ''
        }
    }
}