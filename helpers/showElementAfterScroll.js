export function showElementAfterScroll(el, offtet = 350) {
	const calc = () => {
		document.querySelectorAll(el).forEach(el => {
			el.getBoundingClientRect().top <= offtet ? el.classList.add('active') : el.classList.remove('active')
		})
	}
	calc()
	window.addEventListener('scroll', () => calc(el))
}