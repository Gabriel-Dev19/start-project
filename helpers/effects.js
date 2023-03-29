const fadeIn = (el, duration = 300) => {
    el.style.display = `block`
    el.style.transition = `opacity ${duration}ms`
    
    setTimeout(() => el.style.opacity = '1');
}

const fadeOut = (el, duration = 300) => {
    el.style.transition = `opacity ${duration}ms`
    el.style.opacity = '0'

    setTimeout(() => {
        el.style.display = `none`
    }, duration);
}

export { fadeIn, fadeOut }