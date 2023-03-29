const clearOnboardingLocalStorage = () => {
    window.localStorage.removeItem('step')
    window.localStorage.removeItem('id')
    window.localStorage.removeItem('sending_to_email')
    window.localStorage.removeItem('infos_user_onboarding')
    window.localStorage.removeItem('sending_to_phone')
    window.localStorage.removeItem('referral_code')
}

export default clearOnboardingLocalStorage