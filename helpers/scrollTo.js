export default function scrollTo(el, offset = 0) {
    window.scrollTo(0, document.querySelector(el).getBoundingClientRect().top + window.scrollY + offset)
}